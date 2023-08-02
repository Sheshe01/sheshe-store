import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { GetStaticProps, NextPage } from 'next'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { GetAllProducts } from 'lib/product'
import { CategoryModel, ProductModel } from 'domain/models'
import CheckoutPageComponent from 'components/CheckoutPage'

type CheckouPageProps = {
  categories: CategoryModel[]
  products: ProductModel[]
}

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)

const CheckouPage: NextPage<CheckouPageProps> = data => {
  const { categories, products } = data

  return (
    <Layout categories={categories} isProductPage>
      <Elements stripe={stripePromise}>
        <SEO title="Checkout - Sheshe Store" description="" keywords={['']} />
        <CheckoutPageComponent products={products} />
      </Elements>
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

export default CheckouPage
