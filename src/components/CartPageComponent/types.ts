import { CategoryModel, ProductModel } from 'domain/models'

export type CartPageProps = {
  categories: CategoryModel[]
  products: ProductModel[]
}

export type CartPageComponentProps = {
  products: ProductModel[]
}
