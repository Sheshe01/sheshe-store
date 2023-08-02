import { AttributesModel } from 'domain/models'

export interface IgetAttributes {
  getAttributes(): Promise<AttributesModel[]>
}
