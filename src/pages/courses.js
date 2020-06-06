import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Search from '../components/Search';
import Course from '../components/course/course';
import Chip from '../components/chip';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/courses.scss';
import darkLogo from '../assets/images/africai_dark.png';


const Courses = ({ data: { allMarkdownRemark: { nodes } } }) => {
  const [state, setState] = useState({
    activeFilter: {},
    filters: [{
      id: 1,
      label: 'available',
    },
    {
      id: 2,
      label: 'upcoming',
    }],
  });

  const filteredData = nodes
    .filter((node) => node.frontmatter.category === state.activeFilter.label);

  function toggleActiveFilter(index) {
    setState({ ...state, activeFilter: state.filters[index] });
  }

  function toggleActiveStyles(index) {
    if (state.filters[index] === state.activeFilter) {
      return 'chip__filter';
    }

    return '';
  }
  const dispatch = useDispatch();
  useEffect(() => {
    setState({ ...state, activeFilter: state.filters[0] });
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
        <div className="chips__container">
          {state.filters.map(({ label }, index) => (
            <Chip
              label={label}
              index={index}
              toggleActiveFilter={toggleActiveFilter}
              toggleActiveStyles={toggleActiveStyles}
            />
          ))}
        </div>
        <div className="wrapper">
          <div className="courses__container">
            {filteredData.map((node) => (
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
  allMarkdownRemark(filter: { frontmatter: { type: { eq: "course" } } }) {
    nodes {
      frontmatter {
        title
        category
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
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Courses;
