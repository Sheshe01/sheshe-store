import { CategoryModel } from 'domain/models/CategoryModel'

export const formatSubcategories = (categories: CategoryModel[]) => {
  const formatedData: CategoryModel[] = []

  categories.forEach(category => {
    if (!category.parent) {
      category.children = []
      formatedData.push(category)
    }
  })

  categories.forEach(category => {
    if (category.parent) {
      category.children = []
      const indexParent = formatedData.findIndex(
        (item: CategoryModel) =>
          (item.id as unknown as number) === category.parent
      )
      formatedData[indexParent].children?.push(category)
    }
  })

  return formatedData
}
