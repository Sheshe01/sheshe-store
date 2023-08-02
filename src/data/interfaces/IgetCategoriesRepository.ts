import { CategoryModel } from 'domain/models'

export interface IgetCategoriesRepository {
  getAllCategories(): Promise<CategoryModel[]>
}
