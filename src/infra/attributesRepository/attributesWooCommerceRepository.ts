import {
  IgetAttributesRepository,
  IgetAttributeTermsRepository
} from 'data/interfaces'
import { AttributesModel, AttributeTermsModel } from 'domain/models'
import { WoocommerceHelper } from 'infra/woocommerce/helpers/woocommerceHelper'

export class AttributesWooCommerceRepository
  implements IgetAttributesRepository, IgetAttributeTermsRepository
{
  async getAllAttributes(): Promise<AttributesModel[]> {
    const response = await WoocommerceHelper.getAllAttributes()
    return response.data as AttributesModel[]
  }

  async getAttributeTerms(attributeId: string): Promise<AttributeTermsModel[]> {
    const response = await WoocommerceHelper.getAttributeTerms(attributeId)
    return response.data as AttributeTermsModel[]
  }
}
