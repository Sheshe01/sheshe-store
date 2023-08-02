import { IgetCategoriesRepository } from 'data/interfaces'
import { CategoryModel } from 'domain/models'
import { WoocommerceHelper } from 'infra/woocommerce/helpers/woocommerceHelper'

export class CategoryWooCommerceRepository implements IgetCategoriesRepository {
  async getAllCategories(): Promise<CategoryModel[]> {
    const response = await WoocommerceHelper.getAllCategories()
    return response.data as CategoryModel[]
  }
}
