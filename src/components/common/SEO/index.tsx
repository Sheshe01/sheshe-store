import React from 'react'
import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
  keywords: string[]
  lang?: string
  image?: string
  children?: React.ReactChild
}

const SEO: React.FC<SeoProps> = ({
  title,
  description,
  keywords = [],
  image,
  children
}) => {
  const siteUrl = process.env.NEXT_SITE_URL || 'https://sheshe.com'
  image = image || `${siteUrl}/images/share-sheshe.png`
  const formattedKeywords =
    keywords.length > 0
      ? [
          {
            name: 'keywords',
            content: keywords.join(', ')
          }
        ]
      : []

  const metatags = [
    {
      property: 'title',
      content: title
    },
    {
      name: 'description',
      content: description
    },
    {
      name: 'image',
      content: image
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:site_name',
      content: 'iFood'
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: image
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: image
    }
  ].concat(formattedKeywords)

  return (
    <Head>
      <title>{title}</title>
      {metatags.map(meta => {
        if (!meta?.content || !meta.content.length) {
          return null
        }
        if (meta.name) {
          return (
            <meta key={meta.name} name={meta.name} content={meta.content} />
          )
        }
        return (
          <meta
            key={meta.property}
            property={meta.property}
            content={meta.content}
          />
        )
      })}
      {children}
    </Head>
  )
}

export default SEO
