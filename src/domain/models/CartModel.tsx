/* eslint-disable camelcase */

export type OptionsVariation = {
  id: string
  name: string
  value: string
  variant: boolean
}

type ObjectsWithAMount = {
  id: string
  amount: number
}

export type CartItems = {
  id?: string
  quantity: number
  price: number
  orig_price?: number
  price_total: number
  delivery?: string
  description?: string
  purchase_option?: Object
  options?: OptionsVariation[]
  bundle_items?: Array<Object>
  shipment_weight?: number
  subscription_interval?: string
  subscription_interval_count?: number
  subscription_trial_days?: number
  subscription_paid?: boolean
  discounts?: ObjectsWithAMount[]
  discount_total?: number
  discount_each?: number
  taxes?: ObjectsWithAMount[]
  tax_total?: number
  tax_each?: number
  product_id?: string
  product_name?: string
  product?: string
  variant_id?: string
  variant?: string
  metadata?: object
}

type ShippingModel = {
  name: string
  first_name: string
  last_name: string
  address1: string
  city: string
  state: string
  zip: number
  country: string
  phone: string
  price: number
  service: string
  service_name: string
  account_address_id: string
}

type TaxesObject = {
  id: string
  name: string
  priority: number
  rate: number
  amount: number
}
export type CartModel = {
  id?: string
  abandoned?: boolean
  account_id?: string
  account_info_saved?: boolean
  account_logged_in?: boolean
  checkout_id?: string
  checkout_url?: string
  comments?: string
  coupon_code?: string
  coupon_id?: string
  currency?: string
  date_created?: Date
  date_updated?: Date
  discount_total?: number
  discounts?: Array<Object>
  grand_total?: number
  guest?: false
  item_discount?: number
  item_quantity?: number
  item_shipment_weight?: number
  item_tax?: number
  items: CartItems[]
  number?: string
  order_id?: string
  // promotion_ids: null
  shipment_delivery?: boolean
  shipment_discount?: number
  shipment_price?: number
  // shipment_rating: {
  //   fingerprint: '71e03117e684192f4f33569dab1c74ee'
  //   services: [
  //     {
  //       id: 'standard'
  //       name: 'Standard Shipping'
  //       price: 5
  //     },
  //     {
  //       id: 'express'
  //       name: 'Express Shipping'
  //       price: 10
  //     },
  //     {
  //       id: 'next_day'
  //       name: 'Next Day Shipping'
  //       price: 20
  //     }
  //   ]
  //   errors: null
  // }
  shipment_tax?: number
  shipment_tax_included_total?: number
  shipment_total?: number
  shipping?: ShippingModel
  status?: string
  sub_total?: number
  tax_included_total?: number
  tax_total?: number
  taxes?: TaxesObject[]
  webhook_attempts_failed?: number
  webhook_response?: string
  webhook_status?: number
}
