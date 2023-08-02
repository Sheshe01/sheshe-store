import { OrderModel } from 'domain/models'

export interface IpostOrderRepository {
  postOrder(order: OrderModel): Promise<OrderModel>
}
