import { ProductModel } from 'domain/models'

export interface IgetProductByIdRepository {
  getProductById(id: string): Promise<ProductModel>
}
