import { ProductModel } from 'domain/models'

export interface IgetProductById {
  getProductById: (id: string) => Promise<ProductModel>
}
