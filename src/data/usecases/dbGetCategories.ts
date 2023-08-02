import { CategoryModel } from 'domain/models'
import { IgetCategories } from 'domain/usecases'
import { IgetCategoriesRepository } from '../interfaces'

export class DbGetCategories implements IgetCategories {
  constructor(
    private readonly getCategoriesRepository: IgetCategoriesRepository
  ) {}

  async getCategories(): Promise<CategoryModel[]> {
    const categories = await this.getCategoriesRepository.getAllCategories()

    return categories
  }
}
