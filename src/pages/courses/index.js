import React from 'react';
import { useSelector } from 'react-redux';
import CoursesLayout from '../../layouts/courses/CoursesLayout';
import Course from '../../components/course';
import '../../assets/styles/pages/courses.scss';

function AvailableCourses({ data: { allMarkdownRemark: { nodes } } }) {
  const query = useSelector((state) => state.query.query);

  let courses = nodes;

  if (query) {
    const searchResults = nodes.filter((node) => {
      const { description, title } = node.frontmatter;
      return (
        description.toLowerCase().includes(query.trim().toLowerCase())
      || title.toLowerCase().includes(query.trim().toLowerCase())
      );
    });
    courses = searchResults;
  }
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
            <div className="course__notFound">
              <h3>
                Sorry,we could not find results matching
                <span className="search__query">
                  "
                  {query}
                  "
                </span>
              </h3>
            </div>
          )
        }
      </CoursesLayout>
    </div>
  );
}


export const query = graphql` {
    allMarkdownRemark(filter: { 
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
