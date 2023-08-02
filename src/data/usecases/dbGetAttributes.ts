import {
  IgetAttributesRepository,
  IgetAttributeTermsRepository
} from 'data/interfaces'
import { AttributesModel } from 'domain/models'
import { IgetAttributes } from 'domain/usecases'

export class DbGetAttributes implements IgetAttributes {
  constructor(
    private readonly getAttributesRepository: IgetAttributesRepository,
    private readonly getAttributeTermsRepository: IgetAttributeTermsRepository
  ) {}

  async getAttributes(): Promise<AttributesModel[]> {
    const attributes = await this.getAttributesRepository.getAllAttributes()
    const attributesWithTerms = []
    for (const attribute of attributes) {
      const attributeTerms =
        await this.getAttributeTermsRepository.getAttributeTerms(attribute.id)

      const newAttributeObject = {
        id: attribute.id,
        name: attribute.name,
        slug: attribute.slug,
        type: attribute.type,
        order_by: attribute.order_by,
        has_archives: attribute.has_archives,
        values: attributeTerms
      }
      attributesWithTerms.push(newAttributeObject)
    }

    return attributesWithTerms as AttributesModel[]
  }
}
