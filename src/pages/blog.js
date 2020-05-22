import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import BlogItem from '../components/Blog/BlogItem';
import BlogSearch from '../components/Blog/Search';
import { setLogoUrl } from '../redux/actions';
import {graphql} from 'gatsby';

import '../assets/styles/pages/blog.scss';
import darkLogo from '../assets/images/africai_dark.png';

const Blog = ({data}) => {
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <div className="blog__header">
          <h2 className="blog__heading">Blog</h2>
          <BlogSearch />
        </div>
        {data.allMarkdownRemark.nodes.map(node => (
          <BlogItem
            title={node.frontmatter.title}
            description={node.excerpt}
            readMore = {node.fields.slug}
          />
        ))}
       
      </div>

    </Layout>

  );
};

export default Blog;

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
 
