import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { CategoryModel } from 'domain/models'
import InstitucionalPage from 'components/InstitucionalPage'

type InstitucionalProps = {
  categories: CategoryModel[]
}

const Institucional: NextPage<InstitucionalProps> = data => {
  const { categories } = data
  return (
    <Layout categories={categories} isProductPage>
      <SEO
        title="Institucional - Sheshe store"
        description=""
        keywords={['']}
      />
      <InstitucionalPage />
    </Layout>
  )
}

export default Institucional

export const getStaticProps: GetStaticProps = async () => {
  const categories = await GetAllCategories()

  return {
    props: {
      categories: formatSubcategories(categories)
    }
  }
}
