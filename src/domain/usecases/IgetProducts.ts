import { ProductModel } from 'domain/models'

export interface IgetProducts {
  getProducts: () => Promise<ProductModel[]>
}
