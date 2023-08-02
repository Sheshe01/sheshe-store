import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import { CartPageProps } from 'components/CartPageComponent/types'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { GetAllProducts } from 'lib/product'
import CartPageComponent from 'components/CartPageComponent'

const CartPage: NextPage<CartPageProps> = data => {
  const { isFallback } = useRouter()
  const { categories, products } = data
  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <Layout categories={categories} isProductPage>
      <SEO title="Cart - Sheshe Store" description="" keywords={['']} />
      <CartPageComponent products={products} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await GetAllCategories()
  const products = await GetAllProducts()

  return {
    props: {
      categories: formatSubcategories(categories),
      products
    }
  }
}

export default CartPage
