import { CategoryModel } from 'domain/models'

export interface IgetCategories {
  getCategories: () => Promise<CategoryModel[]>
}
