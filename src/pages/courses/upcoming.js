import React from 'react';
import CoursesLayout from '../../layouts/courses/CoursesLayout';
import Course from '../../components/course/course';
import '../../assets/styles/pages/courses.scss';

function UpcomingCourses({ data: { allMarkdownRemark: { nodes } } }) {
  return (
    <div>
      <CoursesLayout>
        <div className="courses__container">
          {nodes.map((node) => (
            <Course
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              image={node.frontmatter.image}
              content={node.fields.slug}
            />
          ))}
        </div>
      </CoursesLayout>
    </div>
  );
}


export const query = graphql` {
    allMarkdownRemark(filter: { 
        frontmatter: { 
            type: { eq: "course" },
            category: { eq: "upcoming" } 
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

export default UpcomingCourses;
