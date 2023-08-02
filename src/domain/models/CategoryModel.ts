/* eslint-disable camelcase */
import { WooCommerceImage } from './ImageType'

export type CategoryModel = {
  id: string
  name: string
  slug: string
  parent: number
  description: string
  display: string
  image: WooCommerceImage
  menu_order: number
  count: number
  children?: CategoryModel[]
}
