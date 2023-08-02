import { ProductModel } from 'domain/models'

export interface IgetProductsRepository {
  getAll(): Promise<ProductModel[]>
}
