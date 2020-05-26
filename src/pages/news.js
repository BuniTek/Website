import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {graphql} from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import NewsItem from '../components/News/mainNews/NewsItem';
import Search from '../components/Search';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/news.scss';
import darkLogo from '../assets/images/africai_dark.png';

const News = ({data}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);
  return (
    <Layout>
      <SEO title="News" />
      <div className="news">
        <div className="news__header">
          <h2 className="news__heading">News</h2>
          <Search />
        </div>
        {data.allMarkdownRemark.nodes.map(node => (
          <NewsItem
            title={node.frontmatter.title}
            description={node.excerpt}
            readMore = {node.fields.slug}
          />
        ))}
      </div>

    </Layout>

  );
};

export const query = graphql` {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        keywords
        author
        image
      }
      excerpt
      html
      fields {
        slug
      }
    }
  }
}
`

export default News;
