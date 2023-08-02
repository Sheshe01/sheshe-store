import React from 'react'
import Image from 'next/image'
import { useCartContext } from 'context/CartContext'
import { ProductModel } from 'domain/models'
import { formatPrice, rgbDataURL } from 'utils/helpers'
import Text from 'components/common/Text'
import Payment from '../Payment'

import * as Styles from './styles'

const OrderDetails: React.FC<{ products: ProductModel[] }> = ({ products }) => {
  const {
    shoppingCart,
    totalCartPrice,
    freightPrice,
    totalCartPriceWithFreight
  } = useCartContext()

  return (
    <Styles.OrderDetails>
      {shoppingCart && shoppingCart.length > 0 ? (
        <Styles.OrderListContainer>
          <Text as="h1" heading={200}>
            Resumo do pedido
          </Text>
          {shoppingCart.map(productInCart => {
            const queryProductInCart = products.find(
              item => item.id === productInCart.product_id
            )
            return (
              <Styles.OrderListProducts key={queryProductInCart?.id}>
                <Styles.OrderListProductsImage>
                  <Image
                    src={queryProductInCart?.images[0].src as string}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={rgbDataURL(135, 104, 55)}
                  />
                </Styles.OrderListProductsImage>
                <Styles.OrderListProductsContent>
                  <Text small>{queryProductInCart?.name}</Text>
                  <Text small>
                    {formatPrice(parseInt(queryProductInCart?.price as string))}
                  </Text>
                  <Text small>{productInCart.quantity} itens</Text>
                </Styles.OrderListProductsContent>
              </Styles.OrderListProducts>
            )
          })}
          <Styles.OrderTotal>
            <Text body weight="bold">
              Subtotal:{' '}
              {formatPrice(parseInt(totalCartPrice as unknown as string))}
            </Text>
            <Text body weight="bold">
              Frete: {formatPrice(parseInt(freightPrice as unknown as string))}
            </Text>

            <Text body weight="bold">
              Total:{' '}
              {formatPrice(
                parseInt(totalCartPriceWithFreight as unknown as string)
              )}
            </Text>
          </Styles.OrderTotal>
        </Styles.OrderListContainer>
      ) : null}
      <Styles.OrderPayment>
        <Payment />
      </Styles.OrderPayment>
    </Styles.OrderDetails>
  )
}

export default OrderDetails
