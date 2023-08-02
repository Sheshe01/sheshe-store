import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import HelpPage from 'components/HelpPage'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { CategoryModel } from 'domain/models'

type HelpProps = {
  categories: CategoryModel[]
}

const Help: NextPage<HelpProps> = data => {
  const { categories } = data
  return (
    <Layout categories={categories} isProductPage>
      <SEO title="Ajuda - Sheshe store" description="" keywords={['']} />
      <HelpPage />
    </Layout>
  )
}

export default Help

export const getStaticProps: GetStaticProps = async () => {
  const categories = await GetAllCategories()

  return {
    props: {
      categories: formatSubcategories(categories)
    }
  }
}
