import { CategoryModel } from 'domain/models/CategoryModel'

export type HeaderProps = {
  categories: CategoryModel[]
  isCategoryPage?: boolean
  categoryFound?: CategoryModel
  isProductPage?: boolean
}
