/* eslint-disable camelcase */
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import ProductPage from 'components/ProductPage'
import { TemplateProductsPageProps } from 'components/ProductPage/types'
import { formatSubcategories } from 'utils/formatSubcategories'
import { ProductModel } from 'domain/models/'
import { GetAllProducts } from 'lib/product'
import { GetAllCategories } from 'lib/category'
import { GetAllAttributes } from 'lib/attribute'

const TemplateProductsPage: NextPage<TemplateProductsPageProps> = data => {
  const { isFallback } = useRouter()
  const { categories, productFound } = data
  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <Layout categories={categories} isProductPage>
      <SEO
        title={productFound?.name}
        description={productFound?.description}
        keywords={['sheshe', 'moda', 'africana']}
        image={productFound?.images[0].src}
      />
      <ProductPage data={data} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await GetAllProducts()

  const paths = products.map((product: ProductModel) => {
    return { params: { slug: product.slug } }
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

  const products = await GetAllProducts()
  console.log(products)
  const categories = await GetAllCategories()
  const attributes = await GetAllAttributes()

  const productFound = products.find(product => product.slug === slug)

  const regexpTabsHeader = /<h1>.*?<\/h1>/g
  const regexpTabsContent = /<h4>.*?<\/h4>/g

  const tabHeader = productFound?.description.match(regexpTabsHeader)
  const tabContent = productFound?.description.match(regexpTabsContent)

  const productTabs = tabHeader?.map((item: string, index: number) => ({
    index,
    tabTitle: item,
    tabContent: tabContent ? tabContent[index] : null
  }))
  const relatedProducts: ProductModel[] = []
  productFound?.upsell_ids.forEach(upSellProductId => {
    const resultFind = products.find(
      (product: ProductModel) => product.id === upSellProductId
    )
    if (resultFind) {
      relatedProducts.push(resultFind)
    }
  })

  return {
    props: {
      productFound,
      productTabs: productTabs || null,
      categories: formatSubcategories(categories),
      relatedProducts: relatedProducts || null,
      attributes
    }
  }
}

export default TemplateProductsPage
