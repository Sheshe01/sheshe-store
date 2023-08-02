import { AttributeTermsModel } from 'domain/models'

export interface IgetAttributeTerms {
  getAttributeTerms(attributeId: string): Promise<AttributeTermsModel[]>
}
