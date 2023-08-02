import { DbGetAttributes } from 'data/usecases'
import { AttributesWooCommerceRepository } from 'infra/attributesRepository/'

export async function GetAllAttributes() {
  try {
    const getAttributesRepository = new AttributesWooCommerceRepository()
    const getAttributeTermsRepository = new AttributesWooCommerceRepository()

    const getAllAttributesUseCase = new DbGetAttributes(
      getAttributesRepository,
      getAttributeTermsRepository
    )
    const response = await getAllAttributesUseCase.getAttributes()

    return response
  } catch (err) {
    throw new Error(err as string)
  }
}
