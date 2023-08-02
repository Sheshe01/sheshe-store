import axios from 'axios'
import {
  OrderBilling,
  OrderLineItems,
  OrderModel,
  OrderShipping,
  ShippingLines
} from 'domain/models'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export async function PostOrder(
  orderItems: OrderLineItems[],
  orderShipping: OrderShipping,
  orderBilling: OrderBilling,
  paymentIntentId: string,
  shippingLines: ShippingLines[]
) {
  const order: OrderModel = {
    shipping: orderShipping,
    billing: orderBilling,
    payment_method: 'stripe',
    payment_method_title: 'Card',
    set_paid: false,
    line_items: orderItems,
    meta_data: [
      {
        key: '_stripe_intent_id',
        value: paymentIntentId
      }
    ],
    shipping_lines: shippingLines
  }
  try {
    const response = await instance.post('create-order', order)
    return response.data as OrderModel
  } catch (err) {
    console.log(err)
    throw new Error(err as string)
  }
}
