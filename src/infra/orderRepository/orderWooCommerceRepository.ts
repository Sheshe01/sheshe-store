import { IpostOrderRepository } from 'data/interfaces/IpostOrderRepository'
import { OrderModel } from 'domain/models'
import { WoocommerceHelper } from 'infra/woocommerce/helpers/woocommerceHelper'

export class OrderWooCommerceRepository implements IpostOrderRepository {
  async postOrder(order: OrderModel): Promise<OrderModel> {
    const response = await WoocommerceHelper.postOrders(order)
    return response.data as OrderModel
  }
}
