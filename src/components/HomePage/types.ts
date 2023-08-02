import { CategoryModel } from 'domain/models/CategoryModel'

export type IndexProps = {
  categories: CategoryModel[]
  homePageData: {
    designersSection: {
      title: string
      url: string
      designers: Array<DesignersData>
    }
    callToActionSection: {
      title: string
      description: string
      image: string
    }
  }
  designersData: Array<DesignersData>
}
export type HomePageProps = {
  data: IndexProps
}

export type DesignersData = {
  id: number
  slug: string
  name: string
  description: string
  image: {
    src: string
    alt: string
  }
}
