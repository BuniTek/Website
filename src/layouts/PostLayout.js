
import React from 'react';
import { graphql } from 'gatsby';

import 'materialize-css/dist/css/materialize.min.css';
import 'semantic-ui-css/semantic.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'antd/dist/antd.css';
// import { useStaticQuery, graphql } from 'gatsby';

import SiteHeader from '../components/Header/index';
import Footer from '../components/Footer/index';
import './layout.css';
import SEO from '../components/seo';

library.add(fab, faCoffee);

const PostLayout = ({ data }) => {

    const post = data.markdownRemark;
    return (
        <>
        <SEO title = {post.frontmatter.title}
            description = {post.excerpt}
            image ={post.frontmatter.image}
            keywords = {post.frontmatter.keywords}/>
          <div>
            <SiteHeader />
            <main>
                <div>
                    <h1> {post.frontmatter.title} </h1>
                    <div dangerouslySetInnerHTML = {{__html: post.html}} />
                </div>

            </main>
            <Footer />
          </div>
        </>
      );
}




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
        }
    }
}

`
