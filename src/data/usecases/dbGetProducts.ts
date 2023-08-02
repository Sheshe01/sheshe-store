import { ProductModel } from 'domain/models'
import { IgetProducts } from 'domain/usecases'
import { IgetProductsRepository } from '../interfaces'

export class DbGetProducts implements IgetProducts {
  constructor(private readonly getProductsRepository: IgetProductsRepository) {}

  async getProducts(): Promise<ProductModel[]> {
    const products = await this.getProductsRepository.getAll()
    return products
  }
}
