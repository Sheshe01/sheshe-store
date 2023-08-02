import { CategoryModel } from 'domain/models/CategoryModel'

export type LayoutProps = {
  categories: CategoryModel[]
  isCategoryPage?: boolean
  categoryFound?: CategoryModel
  isProductPage?: boolean
}
