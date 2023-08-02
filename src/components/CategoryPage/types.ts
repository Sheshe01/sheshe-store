import { AttributesModel } from 'domain/models/AttributesModel'
import { CategoryModel } from 'domain/models/CategoryModel'
import { ProductModel } from 'domain/models/ProductModel'

export type TemplateCategoriesProps = {
  categoryFound: CategoryModel
  categories: CategoryModel[]
  products: ProductModel[]
  attributes: AttributesModel[]
}
