import { DbGetProductById } from 'data/usecases/dbGetProductById'
import { ProductSwellRepository } from 'infra/productRepository'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id }
  } = req
  try {
    const getProductByIdRepository = new ProductSwellRepository()

    const getProductByIdUseCase = new DbGetProductById(getProductByIdRepository)
    const response = await getProductByIdUseCase.getProductById(id as string)

    res.status(200).json({ ...response })
  } catch (err) {
    res.status(400).json({ message: 'Erro ao buscar produto' })
    return []
  }
}
