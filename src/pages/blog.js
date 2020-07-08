import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { graphql } from 'gatsby';
import { setLogoUrl, setFooterVisible } from '../redux/actions';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import BlogSearch from '../components/Blog/Search';
import Pagination from '../components/Pagination';
import BlogItem from '../components/Blog/BlogItem';


import '../assets/styles/pages/blog.scss';
import darkLogo from '../assets/images/africai_dark.png';

const Blog = ({data: { allMarkdownRemark: { totalCount, nodes } }, pageContext, path}) => {
  console.log(nodes, pageContext, path);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
    setFooterVisible({ visible: true })(dispatch);
  }, []);
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <div className="blog__header">
          <h2 className="blog__heading">Latest News</h2>
          <BlogSearch />
        </div>
        {nodes.map(node => (
          <BlogItem
            title={node.frontmatter.title}
            description={node.excerpt}
            readMore={node.fields.slug}
            featured={node.frontmatter.featuredImage}
          />
        ))}

        <Pagination totalCount={totalCount} pathPrefix="/blog/" currentPage={pageContext.currentPage} />
       
      </div>

    </Layout>

  );
};

export default Blog;

export const query = graphql` query blogListQuery($skip: Int! =0) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    limit: 10,
    skip: $skip,
    filter: {
      frontmatter: {
        type: {
          eq: "post"
        }
      }
    }
  ) {
    nodes {
      frontmatter {
        title
        date
        keywords
        author
        image
        featuredImage
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
 
