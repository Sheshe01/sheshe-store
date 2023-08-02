import React from 'react'
import Image from 'next/image'
import { useCartContext } from 'context/CartContext'
import { formatPrice, rgbDataURL } from 'utils/helpers'
import Text from 'components/common/Text'
import { CartTableProps } from './types'

import * as Styled from './styles'
import useWindowSize from 'hooks/useWindowSize'

const CartTable: React.FC<CartTableProps> = ({
  cartItem,
  queryProductInCart
}) => {
  const { isMobileDevice } = useWindowSize()
  const { AddItemsInCart, DeleteItemsInCart } = useCartContext()
  const { images } = queryProductInCart

  const handleInputCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (cartItem.quantity < parseInt(value)) {
      AddItemsInCart(queryProductInCart)
    } else {
      DeleteItemsInCart(queryProductInCart, false)
    }
  }

  const handleDeleteItem = () => {
    DeleteItemsInCart(queryProductInCart, true)
  }

  return (
    <Styled.TableLine key={cartItem.product_id}>
      <Styled.Remove>
        <span tabIndex={0} role="button" onClick={handleDeleteItem}>
          x
        </span>
      </Styled.Remove>
      <Styled.ProductItem>
        <Styled.ContainerImage>
          <Image
            src={images[0].src}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={rgbDataURL(135, 104, 55)}
          />
        </Styled.ContainerImage>
        <Styled.ContainerProductInfo>
          <Text body>{cartItem.name}</Text>
          {/* {cartItem.options?.map(item => (
            <Styled.ShowOptions key={item.id}>
              <Text body>{item.name}:</Text>
              <Text body>{item.value}</Text>
            </Styled.ShowOptions>
          ))} */}
        </Styled.ContainerProductInfo>
      </Styled.ProductItem>
      <Styled.ColumnTable>
        <Text body>{formatPrice(parseInt(cartItem.price as string))}</Text>
      </Styled.ColumnTable>
      <Styled.ColumnTable>
        <input
          type="number"
          min={1}
          max={10}
          step={1}
          value={cartItem.quantity}
          onChange={e => handleInputCHange(e)}
        />
      </Styled.ColumnTable>
      <Styled.ColumnTable>
        {isMobileDevice ? null : (
          <Text body>{formatPrice(parseInt(cartItem.subtotal as string))}</Text>
        )}
      </Styled.ColumnTable>
    </Styled.TableLine>
  )
}

export default CartTable
