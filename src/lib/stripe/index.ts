import axios from 'axios'
import { CardNumberElement } from '@stripe/react-stripe-js'
import {
  ConfirmCardPaymentData,
  Stripe,
  StripeCardNumberElement,
  StripeElements
} from '@stripe/stripe-js'
import { OrderBilling, OrderLineItems, OrderShipping } from 'domain/models'

type PaymentIntent = {
  paymentIntentId: string
  clientSecret: string
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export async function createPaymentIntentApi(
  data: OrderLineItems[],
  freight: number
) {
  try {
    const paymentIntentObject = {
      orderLineItems: data,
      freight
    }
    const response = await instance.post(
      'create-payment-intent',
      paymentIntentObject
    )
    return response.data as PaymentIntent
  } catch (err) {
    console.log(err)
    throw new Error(err as string)
  }
}

export const ConfirmCardPayment = async (
  elements: StripeElements,
  stripe: Stripe,
  clientSecret: string,
  shippingData: OrderShipping,
  billingData: OrderBilling
) => {
  const paymentMethod: ConfirmCardPaymentData = {
    payment_method: {
      card: elements.getElement(CardNumberElement) as StripeCardNumberElement,
      billing_details: {
        address: {
          city: billingData.city,
          country: billingData.country,
          line1: billingData.address_1,
          line2: billingData.address_2,
          postal_code: billingData.postcode,
          state: billingData.state
        },
        email: billingData.email,
        name: `${billingData.first_name} ${billingData.last_name}`,
        phone: billingData.phone
      }
    },
    receipt_email: '',
    shipping: {
      address: {
        city: shippingData.city,
        country: shippingData.country,
        line1: shippingData.address_1,
        line2: shippingData.address_2,
        postal_code: shippingData.postcode,
        state: shippingData.state
      },
      name: shippingData.first_name
    }
  }

  const result = await stripe.confirmCardPayment(clientSecret, paymentMethod)
  if (result.error) {
    throw new Error(result.error.message)
  }
  return result
}
