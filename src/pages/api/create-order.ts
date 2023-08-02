import { NextApiRequest, NextApiResponse } from 'next'
import { OrderModel } from 'domain/models'
import { OrderWooCommerceRepository } from 'infra/orderRepository'
import { DbPostOrder } from 'data/usecases/dbPostOrder'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderModel | { error: unknown }>
) {
  const data: OrderModel = req.body

  try {
    const postOrderRepository = new OrderWooCommerceRepository()

    const postOrderUseCase = new DbPostOrder(postOrderRepository)
    const response = await postOrderUseCase.postOrder(data)

    res.status(200).json({ ...response })
  } catch (e) {
    console.log(e)
    res.status(500).send({ error: e })
  }
}
