import { IpostOrderRepository } from 'data/interfaces/IpostOrderRepository'
import { OrderModel } from 'domain/models'
import { IpostOrder } from 'domain/usecases'

export class DbPostOrder implements IpostOrder {
  constructor(private readonly postOrderRepository: IpostOrderRepository) {}

  async postOrder(order: OrderModel): Promise<OrderModel> {
    const orderResponse = await this.postOrderRepository.postOrder(order)
    return orderResponse
  }
}
