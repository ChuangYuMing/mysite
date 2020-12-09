import React from 'react'
import { Helmet } from 'react-helmet'
import { CDN_DOMAIN } from '../../../constant'

function MetaTag({ data }) {
  let {
    title,
    description,
    keywords,
    url,
    date,
    category,
    modified_time,
    questions
  } = data
  modified_time = modified_time ? modified_time : date

  const bigImageUrl = `${CDN_DOMAIN}/${url}/${url}.webp`

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={`https://www.childben.com/${category}/${url}/`}/>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@childben28" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@childben28" />
      <meta
        name="twitter:image:src"
        content={`https://cdn.childben.com/${url}/${url}.jpg`}
      />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`https://www.childben.com/${category}/${url}/`}
      />
      <meta
        property="og:image"
        content={`https://cdn.childben.com/${url}/${url}.jpg`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="ChildBen" />
      <meta property="article:published_time" content={date} />
      <meta property="article:modified_time" content={modified_time} />
      <meta property="fb:admins" content="100031410993377" />
      <meta property="fb:app_id" content="848708662592927" />

      {/* <link
        rel="preload"
        href={bigImageUrl}
        as="image"
        type="image/webp"
      ></link> */}
      <script type="application/ld+json">
        {`
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "${title}",
                "image": "https://cdn.childben.com/${url}/${url}.jpg",
                "editor": "Child Ben",
                "keywords": "${keywords}",
                "url": "https://www.childben.com/${category}/${url}",
                "datePublished": "${date}",
                "dateCreated": "${date}",
                "dateModified": "${modified_time}",
                "description": "${description}",
                "publisher": {
                  "@type": "Organization",
                  "name": "Blog Name",
                  "url": "https://www.childben.com",
                  "logo": {
                  	"@type": "ImageObject",
                    "url": "https://www.childben.com/static/images/android-icon-96x96.png",
                    "width": 96,
                    "height": 96
                  }
                },
                "mainEntityOfPage": "https://www.childben.com/${category}/${url}",
                "author": {
                  "@type": "Person",
                  "name": "ChildBen"
                }
              }
          `}
      </script>
      {questiosJsonLd(questions)}
    </Helmet>
  )
}

function questiosJsonLd(questions) {
  if (!questions) {
    return
  }

  let mainEntity = JSON.parse(questions).map((item) => {
    let { name, text } = item
    return {
      '@type': 'Question',
      name,
      acceptedAnswer: {
        '@type': 'Answer',
        text
      }
    }
  })
  let data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity
  }
  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}

export default MetaTag
