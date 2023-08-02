import { NextApiRequest, NextApiResponse } from 'next'
import { DbGetProductById } from 'data/usecases/dbGetProductById'
import { OrderLineItems, ProductModel } from 'domain/models'
import { ProductSwellRepository } from 'infra/productRepository'

type PaymentIntent = {
  paymentIntentId: string
  clientSecret: string
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const getProductTotal = async (lineItem: OrderLineItems) => {
  const getProductByIdRepository = new ProductSwellRepository()
  const getProductByIdUseCase = new DbGetProductById(getProductByIdRepository)
  const product: ProductModel = await getProductByIdUseCase.getProductById(
    lineItem.product_id as string
  )

  const productTotal = lineItem.quantity * (parseFloat(product.price!) * 100)
  return productTotal
}

const calculateTotalAmount = async (lineItems: OrderLineItems[]) => {
  const total = await Promise.all(
    lineItems.map(lineItem => {
      return getProductTotal(lineItem)
    })
  ).then(res => {
    return res.reduce((curr, next) => curr + next)
  })
  return total
}

type ReqType = {
  orderLineItems: OrderLineItems[]
  freight: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaymentIntent | { error: unknown; teste: number }>
) {
  const data: ReqType = req.body
  const productsAmount = await calculateTotalAmount(data.orderLineItems)
  const amount = productsAmount + data.freight * 100

  try {
    console.log(data.freight)
    console.log(amount)
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur'
    })
    res.status(200).json({
      paymentIntentId: paymentIntent.id as string,
      clientSecret: paymentIntent.client_secret
    })
  } catch (e) {
    res.status(500).send({ error: e, teste: amount })
  }
}
