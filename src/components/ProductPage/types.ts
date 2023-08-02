import { AttributesModel } from 'domain/models'
import { CategoryModel } from 'domain/models/CategoryModel'
import { ProductModel } from 'domain/models/ProductModel'

export type TemplateProductsPageProps = {
  categories: CategoryModel[]
  productFound: ProductModel
  productTabs: Array<{ index: number; tabTitle: string; tabContent: string }>
  relatedProducts: ProductModel[]
  attributes: AttributesModel[]
}

export type ProductPagesProps = {
  data: {
    productFound: ProductModel
    productTabs?: Array<{ index: number; tabTitle: string; tabContent: string }>
    relatedProducts: ProductModel[]
    attributes: AttributesModel[]
  }
}
