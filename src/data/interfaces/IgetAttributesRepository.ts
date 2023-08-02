import { AttributesModel } from 'domain/models'

export interface IgetAttributesRepository {
  getAllAttributes(): Promise<AttributesModel[]>
}
