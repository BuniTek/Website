import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { useDispatch } from 'react-redux';
import Img from 'gatsby-image';

import Team from '../components/Team';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import InfoCard from '../components/InfoCard';
import Line from '../components/VerticalLine';
import { setLogoUrl, setFooterVisible } from '../redux/actions';

import '../assets/styles/pages/about.scss';
import logo from '../assets/images/darkish.png';
import quoteImage from '../assets/images/quote-right-solid.svg';
import earsLogo from '../assets/images/partner-ears.png';
import cgiLogo from '../assets/images/partner-cgi.png';

const AboutUs = ({
  data: {
    firstSectionImage, secondSectionImage, billyPicture, danielPicture,elysePicture, eliePicture, willyPicture, alainPicture, brendaPicture, ivyPicture, abbyPicture, penielPicture, kettyPicture, adwoaPicture,
  },
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('home');

    dispatch(setLogoUrl({
      logo,
    }));
    setFooterVisible({ visible: true })(dispatch);
  }, []);

  return (
    <Layout>
      <SEO title="About Us" />
      <div className="about">
        <div className="about__container">
          <section>
            <div className="about__first-section">
              <div className="first-section__image about__first-section-image">
                <Img fluid={firstSectionImage.childImageSharp.fluid} alt="Our story" className="section__image" />
              </div>
              <div className="section__content">
                <div className="section__sub-content">
                  <div className="section__title--container">
                    <span className="section__title">Who are WE?</span>
                    <img src={quoteImage} alt="quote" />
                  </div>
                  <div className="about__first-section-description">
                    <div className="about__shadow rounded absolute-right" />
                    <div>
                      <p>
                        <span className="company__name">BuniTek </span>
                        {' '}
                        is a digital literacy venture working to create
                        a movement that will inspire and introduce new technology to young people and demonstrate
                        its potential through hands-on and cutting-edge technologies.
                      </p>

                      <p>
                        We are creating a community of confident technologists, creative thinkers,
                        and thoughtful learners of our increasingly tech-enabled future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about__second-section-container">
            <div className="about__second-section">
              <div className="section__content">
                <div className="section__sub-content">
                  <div className="section__title--container">

                    <img src={quoteImage} alt="quote" className="quote__heading-rotated" />
                    <span className="section__title">Our Mission</span>
                  </div>
                  <div className="section__content-description ">
                    <div className="about__shadow circle absolute-left" />
                    <div>
                      <p>
                        To inspire, encourage and give African youth a fair shot at discovering
                        technology potential and provide a ground for them to explore and employ
                        their skills to solve problems and invent the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__second-section-image">
                <Img fluid={secondSectionImage.childImageSharp.fluid} alt="Our story" className="section__image" />
              </div>
            </div>
          </section>

          <div className="about__third-section">
            <div className="section__title--container section__title-centered">
              <span className="section__title">Why are we Doing This?</span>
              <img src={quoteImage} alt="quote" className="quote-visibility" />
            </div>

            <div className="about__third-section-content">
              <div className="about__shadow rounded absolute-right" />

              <div>
                <ol className="imglist">

                  <li>
                    <span>
                      To give students a chance to discover and explore their passion in technology
                      and experiment its possibilities at a younger age so that it doesn't feel
                      like an exotic concept.
                    </span>
                  </li>
                  <li>
                    <span>
                      To enable young Africans to optimise on the benefits of Industry 4.0 during
                      which over 25% of jobs will come from the technology sector.
                    </span>
                  </li>
                </ol>

              </div>
            </div>

          </div>

          <section className="about__fourth--section-container">

            <div className="about__fourth--section">
              <div className="section__title--container section__title-centered">
                <img src={quoteImage} className="quote__heading-rotated-shrinkable" alt="quote" />
                <span className="section__title">About Our Courses</span>
              </div>

              <div className="section__three-grid">
                <div className="section__grid-item">
                  <InfoCard
                    title="Simplified and Insightful"
                    description="Our courses are simple and taught at a high level focussing
                     on introducing concepts while providing the bigger picture rather than the fine,
                      low level details.
                   "
                  />
                  <InfoCard
                    title="A Constantly Evolving Curriculum"
                    description="Technology is changing every day. We are constantly updating
                     our courses to ensure that you are up to date with the latest technologies and advancements.
                   "
                  />
                </div>
                <div className="section__grid-line-divider"><Line color="black" /></div>
                <div className="section__grid-item">
                  <InfoCard
                    title="Tailer-Made for You"
                    description="Where possible, we will explain ideas in your local language. We will also use examples
                     and project that you can relate with from your sorrounding.
                   "
                  />
                  <InfoCard
                    title="Practical and Creative"
                    description="The power of technology is in creating. We have accompanied every
                               lesson with a relatable practical activity which gives you a chance to play
                               around with your imagination."
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="about__fifth--section-container">

            <div className="about__fifth--section">
              <div className="section__title--container section__title-centered">

                <span className="section__title">Content Delivery</span>
                <img src={quoteImage} alt="quote" />
              </div>

              <div className="section__three-grid">
                <div className="section__grid-item">
                  <InfoCard
                    title="Online Courses"
                    description="We will offer you the material, guidance and support
                     to satisfy your tech curiosity online through a series of lectures,
                      demonstrations and challenges with immediate feedback.
                   "
                  />
                  <InfoCard
                    title="Bootcamps"
                    description="This a chance to physically meet our brilliant tutors,
                     use our exceptional learning tools and meet a community of young like
                      minded people close to you.
                   "
                  />
                </div>
                <div className="section__grid-line-divider"><Line color="black" /></div>
                <div className="section__grid-item">
                  <InfoCard
                    title="BuniTek Clubs"
                    description="We believe that learning shouldn’t just be limited by the classroom.
                     We are giving you the opportunity and support to build a club in your school
                      and keep on experimenting with technology.
                   "
                  />
                  <InfoCard
                    title="Private Tutoring"
                    description="You do not have to wait for our biannual bootcamps to learn.
                    We can assign you a personal tutor if you wish.
                   "
                  />
                </div>
              </div>
            </div>
          </section>

        </div>
        <Team
          billyPicture={billyPicture}
          danielPicture={danielPicture}
          eliePicture={eliePicture}
          willyPicture={willyPicture}
          alainPicture={alainPicture}
          brendaPicture={brendaPicture}
          ivyPicture={ivyPicture}
          abbyPicture={abbyPicture}
          penielPicture={penielPicture}
          kettyPicture={kettyPicture}
          adwoaPicture={adwoaPicture}
          elysePicture={elysePicture}

        />
        <div className="partners">
          <div className="partners__container">
            <h1 className="partners__title">Our Partners</h1>
            <div className="partners__grid">

              <div>
                <img className="partners__grid--item" src={earsLogo} alt="Embedded and Robotics Society" />
                <h4 className="robotics-society-logo__title">Embedded and Robotics Society</h4>
              </div>
              <div>
                <img className="partners__grid--item" src={cgiLogo} />
              </div>
              <div className="partners__logo--grouped">
                <img className="partners__grid--item" src="https://800664.smushcdn.com/1566666/wp-content/uploads/2018/09/EI-Top-Logo.png?size=500x300" alt="Edinburgh Innovations" />
                <img className="partners__grid--item" src="https://theturingtrust.files.wordpress.com/2017/08/tt-logo-new-final-300dpi.png?w=500" alt="Turing Trust" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query {

  firstSectionImage: file(relativePath: { eq: "about-image2.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  secondSectionImage: file(relativePath: { eq: "about-image.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  billyPicture: file(relativePath: { eq: "team/billyCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  danielPicture: file(relativePath: { eq: "team/DanielMutiaCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  eliePicture: file(relativePath: { eq: "team/elieCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  willyPicture: file(relativePath: { eq: "team/willyCropped.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  alainPicture: file(relativePath: { eq: "team/alainCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  brendaPicture: file(relativePath: { eq: "team/brendaCropped2.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  ivyPicture: file(relativePath: { eq: "team/ivyCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  abbyPicture: file(relativePath: { eq: "team/AbbyCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  penielPicture: file(relativePath: { eq: "team/PenielCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  kettyPicture: file(relativePath: { eq: "team/kettyCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  adwoaPicture: file(relativePath: { eq: "team/AdwoaCropped.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  elysePicture: file(relativePath: { eq: "team/elyseCropped.jpeg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }


}
`;

export default AboutUs;
