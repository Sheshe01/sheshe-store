/* eslint-disable camelcase */
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import CategoryPage from 'components/CategoryPage'
import { CategoryModel } from 'domain/models/CategoryModel'
import { TemplateCategoriesProps } from 'components/CategoryPage/types'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { GetAllAttributes } from 'lib/attribute'
import { GetAllProducts } from 'lib/product'

const TemplateCategoriesPage: NextPage<TemplateCategoriesProps> = data => {
  const { isFallback } = useRouter()
  const { categories, categoryFound, products, attributes } = data
  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <Layout
      categories={categories}
      categoryFound={categoryFound}
      isCategoryPage={true}
    >
      <SEO
        title={categoryFound?.name}
        description={categoryFound?.description}
        keywords={['sheshe', 'moda', 'africana']}
        image={categoryFound?.image.src}
      />
      <CategoryPage products={products} attributes={attributes} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await GetAllCategories()

  const paths = categories.map((category: CategoryModel) => {
    return { params: { slug: category.slug } }
  })

  return {
    paths,
    fallback: true
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const categories = await GetAllCategories()
  const attributes = await GetAllAttributes()
  const products = await GetAllProducts()
  const categoryFound = categories.find(category => category.slug === slug)
  const productsOfCategory = products.filter(product =>
    product.categories.find(item => item.id === categoryFound?.id)
  )

  return {
    props: {
      categoryFound: categoryFound,
      categories: formatSubcategories(categories),
      products: productsOfCategory,
      attributes: attributes
    }
  }
}

export default TemplateCategoriesPage
