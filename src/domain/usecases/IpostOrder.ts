import { OrderModel } from 'domain/models'

export interface IpostOrder {
  postOrder(order: OrderModel): Promise<OrderModel>
}
