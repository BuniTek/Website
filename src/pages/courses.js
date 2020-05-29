import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Search from '../components/Search';
import Course from '../components/course/course';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/courses.scss';
import darkLogo from '../assets/images/africai_dark.png';


const Courses = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);
  return (
    <Layout>
      <SEO title="Courses" />
      <div className="course__page--wrapper">
        <div className="course__page--heading">
          <h2>Available Courses</h2>
        </div>
        <div className="course__search">
          <Search placeholder="Search for a course" />
        </div>
        <div>
          <div className="courses__container">
            {data.allMarkdownRemark.nodes
              .filter((n) => n.frontmatter.type === 'course')
              .map((node) => (
                <Course
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  image={node.frontmatter.image}
                  content={node.fields.slug}
                />
              ))}
          </div>
        </div>
      </div>

    </Layout>
  );
};


export const query = graphql` {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        type
        date
        keywords
        author
        description
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
`;
Courses.propTypes = {
  data: PropTypes.element.isRequired,
};
export default Courses;
