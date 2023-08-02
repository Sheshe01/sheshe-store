import {
  IgetProductByIdRepository,
  IgetProductsRepository
} from 'data/interfaces'
import { ProductModel } from 'domain/models'
import { WoocommerceHelper } from 'infra/woocommerce/helpers/woocommerceHelper'

export class ProductSwellRepository
  implements IgetProductsRepository, IgetProductByIdRepository
{
  async getAll(): Promise<ProductModel[]> {
    const response = await WoocommerceHelper.getAllProducts()
    return response.data as ProductModel[]
  }

  async getProductById(id: string): Promise<ProductModel> {
    const response = await WoocommerceHelper.getProductById(id)
    return response.data as ProductModel
  }
}
