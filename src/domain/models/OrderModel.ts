/* eslint-disable camelcase */
export type ShippingLines = {
  method_id: string
  method_title: string
  total: string
}

export type OrderBilling = {
  first_name: string
  last_name: string
  company: string
  address_1: string
  address_2: string
  city: string
  state: string
  postcode: string
  country: string
  email: string
  phone: string
}

export type OrderShipping = {
  first_name: string
  last_name: string
  company: string
  address_1: string
  address_2: string
  city: string
  state: string
  postcode: string
  country: string
}

export type OrderMetaData = {
  id?: string
  key: string
  value: string
}

export type OrderTaxes = {
  id: string
  rate_code: string
  rate_id: string
  label: string
  compound: boolean
  tax_total: string
  shipping_tax_total: string
  meta_data: Array<OrderMetaData>
}

export type OrderLineItems = {
  id?: string
  name?: string
  product_id?: string
  variation_id?: string
  quantity: number
  tax_class?: string
  subtotal?: string
  subtotal_tax?: string
  total?: string
  total_tax?: string
  taxes?: Array<OrderTaxes>
  meta_data?: Array<OrderMetaData>
  sku?: string
  price?: string
}

export type OrderFeeLines = {
  id: string
  name: string
  tax_class: string
  tax_status: string
  total: string
  total_tax: string
  taxes: Array<OrderTaxes>
  meta_data: Array<OrderMetaData>
}

export type OrderCouponLines = {
  id: string
  code: string
  discount: string
  discount_tax: string
  meta_data: Array<OrderMetaData>
}

export type OrderRefunds = {
  id: string
  reason: string
  total: string
}

export type OrderModel = {
  id?: string
  parent_id?: string
  number?: string
  order_key?: string
  created_via?: string
  version?: string
  status?: string
  currency?: string
  date_created?: Date
  date_created_gmt?: Date
  date_modified?: Date
  date_modified_gmt?: Date
  discount_total?: string
  discount_tax?: string
  shipping_total?: string
  shipping_tax?: string
  cart_tax?: string
  total?: string
  total_tax?: string
  prices_include_tax?: boolean
  customer_id?: string
  customer_ip_address?: string
  customer_user_agent?: string
  customer_note?: string
  billing: OrderBilling
  shipping: OrderShipping
  payment_method: string
  payment_method_title: string
  transaction_id?: string
  date_paid?: Date
  date_paid_gmt?: Date
  date_completed?: Date
  date_completed_gmt?: Date
  cart_hash?: string
  meta_data?: Array<OrderMetaData>
  line_items: Array<OrderLineItems>
  tax_lines?: Array<OrderTaxes>
  shipping_lines?: Array<ShippingLines>
  fee_lines?: Array<OrderFeeLines>
  coupon_lines?: Array<OrderCouponLines>
  refunds?: Array<OrderRefunds>
  set_paid?: boolean
}
