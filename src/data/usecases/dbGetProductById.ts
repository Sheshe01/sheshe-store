import { ProductModel } from 'domain/models'
import { IgetProductById } from 'domain/usecases'
import { IgetProductByIdRepository } from '../interfaces'

export class DbGetProductById implements IgetProductById {
  constructor(
    private readonly getProductByIdRepository: IgetProductByIdRepository
  ) {}

  async getProductById(id: string): Promise<ProductModel> {
    const product = await this.getProductByIdRepository.getProductById(id)
    return product
  }
}
