import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import { DesignersPageData } from 'data/DesignersPage'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { CategoryModel } from 'domain/models'
import { DesignersPageType } from 'components/DesignersPage/types'
import DesignersPage from 'components/DesignersPage'

type DesignersProps = {
  categories: CategoryModel[]
  designersPageData: DesignersPageType[]
}

const Designers: NextPage<DesignersProps> = data => {
  const { categories, designersPageData } = data
  return (
    <Layout categories={categories} isProductPage>
      <SEO title="Designers - Sheshe store" description="" keywords={['']} />
      <DesignersPage designersPageData={designersPageData} />
    </Layout>
  )
}

export default Designers

export const getStaticProps: GetStaticProps = async () => {
  const categories = await GetAllCategories()

  return {
    props: {
      categories: formatSubcategories(categories),
      designersPageData: DesignersPageData
    }
  }
}
