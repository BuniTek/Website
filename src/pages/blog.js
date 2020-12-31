import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { graphql } from 'gatsby';

import { setLogoUrl, setFooterVisible } from '../redux/actions';
import { resetSearchState } from '../redux/actions/search.action';

import Layout from '../layouts/layout';
import SEO from '../components/seo';

import Pagination from '../components/Pagination';
import BlogItem from '../components/Blog/BlogItem';

import '../assets/styles/pages/blog.scss';
import darkLogo from '../assets/images/darkish.png';
import Search from '../components/Search';

const Blog = ({ data: { allMarkdownRemark: { totalCount, nodes } }, pageContext, path }) => {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);
  const allPosts = nodes;

  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
    setFooterVisible({ visible: true })(dispatch);
    dispatch(resetSearchState());
  }, []);

  useEffect(() => {
    setSearchResults(nodes.filter((node) => {
      const { author, title, keywords } = node.frontmatter;
      return (
        author.toLowerCase().includes(query.trim().toLowerCase())
      || title.toLowerCase().includes(query.trim().toLowerCase())
      || keywords.toLowerCase().includes(query.trim().toLowerCase())
      || node.excerpt.toLowerCase().includes(query.trim().toLowerCase())
      );
    }));
  }, [query, nodes]);

  const hasSearchResults = searchResults && query !== '';
  const posts = hasSearchResults ? searchResults : allPosts;

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <div className="blog__header">
          <h2 className="blog__heading">Latest News</h2>
          <Search placeholder="Search for a post" />
        </div>
        { posts[0] ? (
          <div className="posts__container">
            {posts.map((post) => (
              <BlogItem
                title={post.frontmatter.title}
                description={post.excerpt}
                readMore={post.fields.slug}
                featured={post.frontmatter.featuredImage}
              />
            ))}
          </div>
        ) : (
          <div>
            <div className="post__notFound">
              <h3>
                Sorry,we could not find results matching
                <span className="search__query">
                  {`"${query}"`}
                </span>
              </h3>
            </div>
            <div>
              <h2 className="suggestions__header">Suggested posts</h2>
              <div className="posts__container">
                {allPosts.map((post) => (
                  <BlogItem
                    title={post.frontmatter.title}
                    description={post.excerpt}
                    readMore={post.fields.slug}
                    featured={post.frontmatter.featuredImage}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

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
`;
