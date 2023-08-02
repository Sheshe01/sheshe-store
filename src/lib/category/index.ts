import { CategoryWooCommerceRepository } from 'infra/categoriesRepository/categoryWooCommerceRepository'
import { DbGetCategories } from 'data/usecases'

export async function GetAllCategories() {
  try {
    const getCategoriesRepository = new CategoryWooCommerceRepository()

    const getAllCategoriesUseCase = new DbGetCategories(getCategoriesRepository)
    const response = await getAllCategoriesUseCase.getCategories()

    return response
  } catch (err) {
    console.log(err)
    throw new Error(err as string)
  }
}
