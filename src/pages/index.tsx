import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import HomePage from 'components/HomePage'
import { IndexProps } from 'components/HomePage/types'
import { HomePageData } from 'data/HomePage'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'

const Home: NextPage<IndexProps> = data => {
  const { categories } = data
  return (
    <Layout categories={categories}>
      <SEO
        title="Sheshe store"
        description="Sheshe store moda africana"
        keywords={['sheshe', 'moda', 'africana']}
      />
      <HomePage data={data} />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const categories = await GetAllCategories()

  return {
    props: {
      categories: formatSubcategories(categories),
      homePageData: HomePageData
    }
  }
}
