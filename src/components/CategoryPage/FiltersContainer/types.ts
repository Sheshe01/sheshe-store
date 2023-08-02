import { AttributesModel } from 'domain/models/AttributesModel'

export type FiltersContainerProps = {
  attributes: AttributesModel[]
  handleFiltersClick: (value: string[]) => void
}
