import { AttributeTermsModel } from 'domain/models'

export interface IgetAttributeTermsRepository {
  getAttributeTerms(attributeId: string): Promise<AttributeTermsModel[]>
}
