import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch ,useSelector} from 'react-redux';

import Layout from '../layout';
import SEO from '../../components/seo';
import Search from '../../components/Search';
import Chip from '../../components/chip';
import { setLogoUrl } from '../../redux/actions';

import './coursesLayout.scss';
import darkLogo from '../../assets/images/milkish.png';


const CoursesLayout = ({ children }) => {
  const heading = useSelector((state) => state.ui.heading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);

  return (
    <Layout>
      <SEO title="Courses" />
      <div className="course__page--wrapper">
        <div className="course__page--heading">
  <h2>{heading}</h2>
        </div>
        <div className="course__search">
          <Search placeholder="Search for a course" />
        </div>
        <div className="chips__container">
          <Chip label="available" url="/courses" />
          <Chip label="upcoming" url="/courses/upcoming" />
        </div>
        {children}
      </div>

    </Layout>
  );
};

CoursesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoursesLayout;
