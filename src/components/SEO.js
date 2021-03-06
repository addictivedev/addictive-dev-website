import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-intl"

const SEO = ({ title, description, image, lang, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            <Helmet
              htmlAttributes={{
                lang: currentLocale,
              }}
              title={seo.title} titleTemplate={titleTemplate}>
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              <meta name="keywords" content={seo.keywords} />

              {seo.url && <meta property="og:url" content={seo.url} />}
              {(article ? true : null) && (
                <meta property="og:type" content="article" />
              )}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.keywords && <meta property="og:keywords" content={seo.keywords} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
              {seo.image && <meta property="og:image" content={seo.image} />}

              <meta name="twitter:card" content="summary_large_image" />
              {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
              )}
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.description && (
                <meta name="twitter:description" content={seo.description} />
              )}
              {seo.image && <meta name="twitter:image" content={seo.image} />}
            </Helmet>
          }
          </IntlContextConsumer>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  article: PropTypes.bool,
}

SEO.defaultProps = {
  lang: `en`,
  title: null,
  description: null,
  keywords: [],
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        keywords
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
