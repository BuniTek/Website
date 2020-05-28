import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {graphql} from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import NewsItem from '../components/News/mainNews/NewsItem';
import Chip from '../components/chip';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/news.scss';
import darkLogo from '../assets/images/africai_dark.png';
import Pagination from '../components/Pagination';

const News = ({data: { allMarkdownRemark: { totalCount, nodes } }, pageContext, path}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);
  return (
    <Layout>
      <SEO title="News" />
      <div className="news">
        <div className="news__header">
          <h2 className="news__heading">Latest News</h2>
        </div>
        <div className="chips__container">
            <Chip filter="technology" />
            <Chip filter="Africa-i" />
            <Chip filter="General" />
            <Chip filter="Education" />
        </div>
        {nodes.filter((n)=>n.frontmatter.type === 'news')
          .map(node => (
          <NewsItem
            title={node.frontmatter.title}
            description={node.excerpt}
            readMore = {node.fields.slug}
          />
        ))}

        <Pagination totalCount={totalCount} pathPrefix="/news/" currentPage={pageContext.currentPage} />

      </div>

    </Layout>

  );
};
export const query = graphql` query blogListQuery($skip: Int! =0) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    limit: 10,
    skip: $skip
  ) {
    nodes {
      frontmatter {
        title
        type
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
    totalCount
  }
}
`

export default News;
