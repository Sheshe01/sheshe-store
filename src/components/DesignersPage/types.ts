export type DesignersPageType = {
  id: number
  slug: string
  name: string
  description: string
  image: {
    src: string
    alt: string
  }
}

export type DesignersPageProps = {
  designersPageData: DesignersPageType[]
}
