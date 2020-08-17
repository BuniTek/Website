
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

import './postLayout.scss';

import { setLogoUrl } from '../redux/actions';
import logo from '../assets/images/darkish.png';



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
      <div className="content">
        <SiteHeader />
        <main className="post">
          <div className="post__content">
            <div className="row">
            <div class="col s9"><h2 className="post__title">{post.frontmatter.title}</h2></div>
            <div class="col s3 "><h3 className="post__author">{post.frontmatter.author}</h3></div>
            </div>
            <div className="post__date">
              <i>
                Posted &nbsp;
                {post.frontmatter.date}
              </i>
            </div>
              
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
