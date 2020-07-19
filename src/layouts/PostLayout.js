
// Absolute imports
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Relative imports
import SiteHeader from '../components/Header/index';
import Footer from '../components/Footer/index';
import SEO from '../components/seo';

// Styles imports
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import './layout.css';
import './postLayout.scss';

import { setLogoUrl } from '../redux/actions';
import logo from '../assets/images/BuniTek_dark.png';



library.add(fab, faCoffee);

const PostLayout = ({ data }) => {
  const post = data.markdownRemark;

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(setLogoUrl({ logo }));
  }, []);
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.image}
        keywords={post.frontmatter.keywords}
      />
      <div>
        <SiteHeader />
        <main className="post">
          <div>
            <h1 className="post__title">{post.frontmatter.title}</h1>
            <h3 className="post__author">{post.frontmatter.author}</h3>
            <i>
              Posted &nbsp;
              {post.frontmatter.date}
            </i>
            {post.frontmatter.featuredImage && <img className="post-featured" src={post.frontmatter.featuredImage} />}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

PostLayout.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};


export default PostLayout;

export const query = graphql`

query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}){
        html, 
        excerpt,
        frontmatter{
            title
            keywords
            image
            date(fromNow: true)
            featuredImage
            author
        }
    }
}

`;
