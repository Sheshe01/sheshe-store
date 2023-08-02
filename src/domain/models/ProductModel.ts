/* eslint-disable camelcase */
import { WooCommerceImage } from './ImageType'

type StockStatus = 'instock' | 'outofstock' | 'onbackorder'

export type ProductDownload = {
  id: string
  name: string
  file: string
}
export type ProductDimensions = {
  length: string
  width: string
  height: string
}
export type ProductCategory = {
  id: string
  name: string
  slug: string
}
export type ProductTags = {
  id: number
  name: string
  slug: string
}
export type ProductAttributes = {
  id: string
  name: string
  position: number
  visible: boolean
  variation: boolean
  options: Array<string>
}
export type ProductDefaultAttributes = {
  id: string
  name: string
  option: string
}
export type ProductMetaData = {
  id: string
  key: string
  value: string
}

export type ProductModel = {
  id: string
  name: string
  slug: string
  permalink: string
  date_created: Date
  date_created_gmt: Date
  date_modified: Date
  date_modified_gmt: Date
  type: string
  status: string
  featured: boolean
  catalog_visibility: string
  description: string
  short_description: string
  sku: string
  price: string
  regular_price: string
  sale_price: string
  date_on_sale_from: Date
  date_on_sale_from_gmt: Date
  date_on_sale_to: Date
  date_on_sale_to_gmt: Date
  price_html: string
  on_sale: boolean
  purchasable: boolean
  total_sales: number
  virtual: boolean
  downloadable: boolean
  downloads: Array<ProductDownload>
  download_limit: number
  download_expiry: number
  external_url: string
  button_text: string
  tax_status: string
  tax_class: string
  manage_stock: boolean
  stock_quantity: number
  stock_status: StockStatus
  backorders: string
  backorders_allowed: boolean
  backordered: boolean
  sold_individually: boolean
  weight: string
  dimensions: ProductDimensions
  shipping_required: boolean
  shipping_taxable: boolean
  shipping_class: string
  shipping_class_id: number
  reviews_allowed: boolean
  average_rating: string
  rating_count: number
  related_ids: Array<string>
  upsell_ids: Array<string>
  cross_sell_ids: Array<string>
  parent_id: string
  purchase_note: string
  categories: Array<ProductCategory>
  tags: Array<ProductTags>
  images: Array<WooCommerceImage>
  attributes: Array<ProductAttributes>
  default_attributes: Array<ProductDefaultAttributes>
  variations: Array<string>
  grouped_products: Array<string>
  menu_order: number
  meta_data: Array<ProductMetaData>
}
