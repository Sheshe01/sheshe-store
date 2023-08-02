import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import ContactPage from 'components/ContactPage'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { CategoryModel } from 'domain/models'

type ContactProps = {
  categories: CategoryModel[]
}

const Contact: NextPage<ContactProps> = data => {
  const { categories } = data
  return (
    <Layout categories={categories} isProductPage>
      <SEO title="Contato - Sheshe store" description="" keywords={['']} />
      <ContactPage />
    </Layout>
  )
}

export default Contact

export const getStaticProps: GetStaticProps = async () => {
  const categories = await GetAllCategories()

  return {
    props: {
      categories: formatSubcategories(categories)
    }
  }
}
