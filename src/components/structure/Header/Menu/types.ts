import { CategoryModel } from 'domain/models/CategoryModel'

export type MenuProps = {
  categories: CategoryModel[]
  isCollapsed?: boolean
  color?: string
}
export type NavLinkProps = {
  link: CategoryModel
  color?: string
}
