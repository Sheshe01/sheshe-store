import { IgetAttributeTermsRepository } from 'data/interfaces'
import { AttributeTermsModel } from 'domain/models'
import { IgetAttributeTerms } from 'domain/usecases'

export class DbGetAttributeTerms implements IgetAttributeTerms {
  constructor(
    private readonly getAttributeTermsRepository: IgetAttributeTermsRepository
  ) {}

  async getAttributeTerms(attributeId: string): Promise<AttributeTermsModel[]> {
    const attributeTerms =
      await this.getAttributeTermsRepository.getAttributeTerms(attributeId)
    return attributeTerms
  }
}
