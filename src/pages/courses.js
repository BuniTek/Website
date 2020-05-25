import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Search from '../components/Search';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/courses.scss';
import darkLogo from '../assets/images/africai.png';
import Course from '../components/course/course';
import Chip from '../components/chip';


const Courses = () => {
  const [courses, setCourses] = useState(
    [
      {
        id: 1,
        title: 'introduction to python',
        image: 'https://fakeimg.pl/400x300/e3fca4/000/',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Cum nesciunt alias dolore dicta .',
      },
      {
        id: 2,
        title: 'intro to web development',
        image: 'https://fakeimg.pl/400x300/e3fca4/000/',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nesciunt alias dolore dicta .',
      },
      {
        id: 3,
        title: 'video production',
        image: 'https://fakeimg.pl/400x300/e3fca4/000/',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nesciunt alias dolore dicta .',
      },
      {
        id: 4,
        title: 'gatsby fundamentals',
        image: 'https://fakeimg.pl/400x300/e3fca4/000/',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nesciunt alias dolore dicta .',
      },
      {
        id: 5,
        title: 'advanced react',
        image: 'https://fakeimg.pl/400x300/e3fca4/000/',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nesciunt alias dolore dicta .',
      },
      {
        id: 6,
        title: 'artificial intelligence',
        image: 'https://fakeimg.pl/400x300/e3fca4/000/',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nesciunt alias dolore dicta .',
      },

    ],
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);
  return (
    <Layout>
      <SEO title="Courses" />
      <div className="course__page--wrapper">
        <div className="course__page--header">
          <h2 className="course__page--heading">Courses</h2>
          <Search />
        </div>
        <div>
          <div className="chips__container">
            <Chip filter="newest" />
            <Chip filter="popular" />
            <Chip filter="tech" />
            <Chip filter="duration" />
          </div>
          <div className="courses__container">
            {courses.map((course) => (
              <div key={course.id} className="course">
                <Course
                  title={course.title}
                  image={course.image}
                  description={course.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Courses;
