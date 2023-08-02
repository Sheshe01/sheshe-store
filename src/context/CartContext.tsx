import React, { createContext, useState, useContext, useEffect } from 'react'
import Toast from 'components/common/Toast'
import { OptionsVariation, ProductModel, OrderLineItems } from 'domain/models'

import { getCartInLocalStorage, setCartInLocalStorage } from 'utils/helpers'
import axios, { AxiosResponse } from 'axios'
import LoadingSpinner from 'components/common/LoadingSpinner'
import { prices } from 'data/prices'
import { RegionType } from 'data/regions'

type ToastType = {
  visible: boolean
  title: string
}
type CartContextProps = {
  shoppingCart: OrderLineItems[] | undefined
  setShoppingCart: React.Dispatch<
    React.SetStateAction<OrderLineItems[] | undefined>
  >
  AddItemsInCart: (
    product: ProductModel
    // chosenAttributes: OptionsVariation[]
  ) => void
  quantityItemsInCart: number
  setQuantityItemsInCart: React.Dispatch<React.SetStateAction<number>>
  DeleteItemsInCart: (product: ProductModel, isDeleteAllItem: boolean) => void
  CalculateTotalCartPrice: (list: OrderLineItems[] | undefined) => void
  totalCartPrice: number
  setTotalCartPrice: React.Dispatch<React.SetStateAction<number>>
  totalCartPriceWithFreight: number
  setTotalCartPriceWithFreight: React.Dispatch<React.SetStateAction<number>>
  CalculateTotalCartPriceWithFreight: (
    list: OrderLineItems[] | undefined,
    city: RegionType | undefined
  ) => void
  setToast: React.Dispatch<React.SetStateAction<ToastType>>
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<boolean>
  AddCityToFreight: (region: RegionType) => void
  freightPrice: number
  setFreightPrice: React.Dispatch<React.SetStateAction<number>>
  selectedCity: RegionType | undefined
  setSelectedCity: React.Dispatch<React.SetStateAction<RegionType | undefined>>
}

const defaultValue = {
  shoppingCart: undefined,
  setShoppingCart: () => {},
  AddItemsInCart: () => {},
  quantityItemsInCart: 0,
  setQuantityItemsInCart: () => {},
  DeleteItemsInCart: () => {},
  CalculateTotalCartPrice: () => {},
  totalCartPrice: 0,
  setTotalCartPrice: () => {},
  totalCartPriceWithFreight: 0,
  setTotalCartPriceWithFreight: () => {},
  CalculateTotalCartPriceWithFreight: () => {},
  setToast: () => {},
  modalIsOpen: false,
  setModalIsOpen: () => {},
  AddCityToFreight: () => {},
  freightPrice: 0,
  setFreightPrice: () => {},
  selectedCity: undefined,
  setSelectedCity: () => {}
}

const CartContext = createContext<CartContextProps>(defaultValue)

const CartContextProvider: React.FC = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<OrderLineItems[]>()
  const [quantityItemsInCart, setQuantityItemsInCart] = useState<number>(0)
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0)
  const [freightPrice, setFreightPrice] = useState<number>(0)
  const [totalCartPriceWithFreight, setTotalCartPriceWithFreight] =
    useState<number>(0)
  const [isOpenToast, setToast] = useState<ToastType>({
    visible: false,
    title: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = React.useState<
    RegionType | undefined
  >(undefined)

  const dispatchState = (
    newShoppingCart: OrderLineItems[],
    isFirstRender: boolean
    // selectedCity: RegionType | undefined = undefined
  ) => {
    if (!isFirstRender) {
      setCartInLocalStorage(newShoppingCart as OrderLineItems[])
    }
    setShoppingCart(newShoppingCart)
    CalculateQuantityItemsInCart(newShoppingCart as OrderLineItems[])
    CalculateTotalCartPrice(newShoppingCart)
    CalculateTotalCartPriceWithFreight(newShoppingCart, selectedCity)
    setIsLoading(false)
  }

  const AddCityToFreight = () => {
    dispatchState(shoppingCart as OrderLineItems[], false)
  }

  const AddItemsInCart = async (
    product: ProductModel /*, chosenAttributes?: OptionsVariation[] */
  ) => {
    setIsLoading(true)
    const productResponse: AxiosResponse<ProductModel> = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product/${product.id}`
    )
    const { data: productInWooCommerce, status } = productResponse
    if (status === 200 && productInWooCommerce.stock_quantity > 0) {
      const newShoppingCartItem: OrderLineItems = {
        product_id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        subtotal: product.price
        // options: chosenAttributes
      }

      const newShoppingCart = shoppingCart
        ? (shoppingCart as OrderLineItems[])
        : ([] as OrderLineItems[])
      let itemIndex = shoppingCart
        ? shoppingCart.findIndex(item => item.product_id === product.id)
        : -1

      if (itemIndex === -1) {
        newShoppingCart.push(newShoppingCartItem)
        itemIndex = 0
      } else {
        newShoppingCart[itemIndex].quantity += 1
        newShoppingCart[itemIndex].subtotal = (
          parseInt(newShoppingCart[itemIndex].subtotal as string) +
          parseInt(product.price)
        ).toString()
      }
      if (
        newShoppingCart[itemIndex].quantity <=
        productInWooCommerce.stock_quantity
      ) {
        dispatchState(newShoppingCart, false)
        setToast({
          visible: true,
          title: `"${product.name}" foi adicionado ao seu carrinho`
        })
      } else {
        setToast({
          visible: true,
          title: `"${product.name}" não tem estoque disponível`
        })
      }
    } else {
      setToast({
        visible: true,
        title: `"${product.name}" não tem estoque disponível`
      })
    }
  }

  const DeleteItemsInCart = (
    product: ProductModel,
    isDeleteAllItem: boolean
  ) => {
    setIsLoading(true)
    const newShoppingCart = shoppingCart?.filter(
      item => item.product_id !== product.id
    )

    if (!isDeleteAllItem) {
      const indexItem = shoppingCart?.findIndex(
        item => item.product_id === product.id
      ) as number

      const newCartItem = shoppingCart ? shoppingCart[indexItem] : undefined

      if (newCartItem) {
        newCartItem.quantity -= 1
        newCartItem.subtotal = (
          parseInt(newCartItem.subtotal as string) -
          parseInt(newCartItem.price as string)
        ).toString()
      }
      newShoppingCart?.push(newCartItem as OrderLineItems)
      if (!newCartItem) setFreightPrice(0)
    }
    dispatchState(newShoppingCart as OrderLineItems[], false)
    setToast({
      visible: true,
      title: `"${product.name}" foi removido do seu carrinho`
    })
  }

  const CalculateQuantityItemsInCart = (cart: OrderLineItems[]) => {
    if (cart) {
      let numberOfItems = 0
      for (let i = 0; i < cart?.length; i++) {
        numberOfItems += cart[i].quantity
      }
      setQuantityItemsInCart(numberOfItems)
    } else setQuantityItemsInCart(0)
  }

  const CalculateTotalCartPrice = (list: OrderLineItems[] | undefined) => {
    let totalPrice = 0
    if (list) {
      list.forEach(item => {
        totalPrice += parseInt(item.subtotal as string)
      })
      setTotalCartPrice(totalPrice)
    } else {
      setTotalCartPrice(0)
    }
  }

  const CalculateTotalCartPriceWithFreight = (
    list: OrderLineItems[] | undefined,
    city: RegionType | undefined
  ) => {
    let totalPrice = 0
    if (list) {
      list.forEach(item => {
        totalPrice += parseInt(item.subtotal as string)
      })
      if (city) {
        setFreightPrice(prices[city.zone])
        setTotalCartPriceWithFreight(totalPrice + prices[city.zone])
      } else {
        setFreightPrice(0)
        setTotalCartPriceWithFreight(totalPrice)
      }
    } else {
      setTotalCartPriceWithFreight(0)
    }
  }

  useEffect(() => {
    dispatchState(getCartInLocalStorage(), true)
  }, [])
  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        AddItemsInCart,
        quantityItemsInCart,
        setQuantityItemsInCart,
        DeleteItemsInCart,
        CalculateTotalCartPrice,
        totalCartPrice,
        setTotalCartPrice,
        totalCartPriceWithFreight,
        setTotalCartPriceWithFreight,
        CalculateTotalCartPriceWithFreight,
        AddCityToFreight,
        setToast,
        modalIsOpen,
        setModalIsOpen,
        freightPrice,
        setFreightPrice,
        selectedCity,
        setSelectedCity
      }}
    >
      <React.Fragment>
        {isLoading ? <LoadingSpinner /> : null}
        {children}
        <Toast
          closeCallback={() => setToast({ visible: false, title: '' })}
          isOpen={isOpenToast.visible}
          title={isOpenToast.title}
        />
      </React.Fragment>
    </CartContext.Provider>
  )
}

function useCartContext(): CartContextProps {
  const context = useContext(CartContext)

  if (!context)
    throw new Error(
      'useCartContextProvider must be used within an CartContextProvider.'
    )

  return context
}

export { CartContextProvider, useCartContext }
