/* eslint-disable camelcase */

export type AttributeTermsModel = {
  id: string
  name: string
  slug: string
  description: string
  menu_order: number
  count: number
}

export type AttributesModel = {
  id: string
  name: string
  slug: string
  type: string
  order_by: string
  has_archives: boolean
  values?: Array<AttributeTermsModel>
}
