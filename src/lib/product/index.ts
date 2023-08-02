import { ProductSwellRepository } from 'infra/productRepository/productWooCommerceRepository'
import { DbGetProducts } from 'data/usecases'

export async function GetAllProducts() {
  try {
    const getProductsRepository = new ProductSwellRepository()

    const getAllProductsUseCase = new DbGetProducts(getProductsRepository)
    const response = await getAllProductsUseCase.getProducts()

    return response
  } catch (err) {
    console.log(err)
    throw new Error(err as string)
  }
}
