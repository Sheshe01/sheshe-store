/* eslint-disable camelcase */
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import Layout from 'components/structure/Layout'
import SEO from 'components/common/SEO'
import { formatSubcategories } from 'utils/formatSubcategories'
import { GetAllCategories } from 'lib/category'
import { DesignersPageData } from 'data/DesignersPage'
import DesignerPage from 'components/DesignerPage'
import { CategoryModel } from 'domain/models'
import { DesignersPageType } from 'components/DesignersPage/types'

type TemplateDesignersPageProps = {
  categories: CategoryModel[]
  designerFound: DesignersPageType
}

const TemplateDesignersPage: NextPage<TemplateDesignersPageProps> = data => {
  const { isFallback } = useRouter()
  const { categories, designerFound } = data
  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <Layout categories={categories} isProductPage>
      <SEO
        title={designerFound?.name}
        description={designerFound?.description}
        keywords={[]}
        image={designerFound?.image.src}
      />
      <DesignerPage designerFound={data.designerFound} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = DesignersPageData.map(designer => {
    return { params: { slug: designer.slug } }
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

  const designerFound = DesignersPageData.find(
    designer => designer.slug === slug
  )

  return {
    props: {
      designerFound,
      categories: formatSubcategories(categories)
    }
  }
}

export default TemplateDesignersPage
