/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, title, keywords, image
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle:title
            defaultDescription: description
            author
            defaultImage: image
            url
            DefaultKeywords: keywords
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    description: description || site.siteMetadata.defaultDescription,
    image: `${image? image:site.siteMetadata.url+ site.siteMetadata.defaultImage}`,
    keywords: keywords || site.siteMetadata.DefaultKeywords, 
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={`%s | ${site.siteMetadata.defaultTitle}`}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.description,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: seo.title,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },
        {
          name: 'keywords',
          content: seo.keywords,
        },
        {
          name: 'robots',
          content: 'index,follow',
        },
        {
          name: 'image',
          content: seo.image,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
