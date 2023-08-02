import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import PrivacyPage from 'components/PrivacyPage'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { CategoryModel } from 'domain/models'

type PrivacyPageProps = {
  categories: CategoryModel[]
}

const Privacy: NextPage<PrivacyPageProps> = data => {
  const { categories } = data
  return (
    <Layout categories={categories} isProductPage>
      <SEO
        title="Política de privacidade - Sheshe Store"
        description=""
        keywords={['']}
      />
      <PrivacyPage />
    </Layout>
  )
}

export default Privacy

export const getStaticProps: GetStaticProps = async () => {
  const categories = await GetAllCategories()

  return {
    props: {
      categories: formatSubcategories(categories)
    }
  }
}
