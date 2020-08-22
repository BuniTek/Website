import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import CoursesLayout from '../../layouts/courses/CoursesLayout';
import Course from '../../components/course';
import { resetSearchState } from '../../redux/actions/search.action';
import { changeCoursePageHeading } from '../../redux/actions';

import '../../assets/styles/pages/courses.scss';

function AvailableCourses({ data: { allMarkdownRemark: { nodes } } }) {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);

  const allCourses = nodes;

  useEffect(() => {
    dispatch(resetSearchState());
    dispatch(changeCoursePageHeading('Available courses'));
  }, []);

  useEffect(() => {
    setSearchResults(nodes.filter((node) => {
      const { description, title } = node.frontmatter;
      return (
        description.toLowerCase().includes(query.trim().toLowerCase())
      || title.toLowerCase().includes(query.trim().toLowerCase())
      );
    }));
  }, [query, nodes]);

  const hasSearchResults = searchResults && query !== '';
  const courses = hasSearchResults ? searchResults : allCourses;

  return (
    <div>
      <CoursesLayout>
        {
          courses[0] ? (
            <div className="courses__container">
              {courses.map((course) => (
                <Course
                  title={course.frontmatter.title}
                  description={course.frontmatter.description}
                  image={course.frontmatter.image}
                  content={course.fields.slug}
                />
              ))}
            </div>
          ) : (
            <div>
              <div className="course__notFound">
                <h3>
                  Sorry,we could not find results matching
                  <span className="search__query">
                    {`"${query}"`}
                  </span>
                </h3>
              </div>
              <div>
                <h2 className="suggestions__header">Suggested courses</h2>
                <div className="courses__container">
                  {allCourses.map((course) => (
                    <Course
                      title={course.frontmatter.title}
                      description={course.frontmatter.description}
                      image={course.frontmatter.image}
                      content={course.fields.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        }
      </CoursesLayout>
    </div>
  );
}
AvailableCourses.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql` {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },filter: { 
        frontmatter: { 
            type: { eq: "course" },
            category: { eq: "available" } 
            } 
        }
        ) {
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

export default AvailableCourses;
