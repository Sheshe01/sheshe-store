import { CartItems, ProductModel } from 'domain/models'
import { OrderLineItems } from 'domain/models/OrderModel'

export type CartTableProps = {
  cartItem: OrderLineItems
  queryProductInCart: ProductModel
}
