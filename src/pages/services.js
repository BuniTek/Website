import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import '../assets/styles/pages/services.scss';

const Services = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('home');
  });
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "codingBootcamp.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "codingBcp.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `);

  
  return (
    <Layout>
      <SEO title="Our Services" />
      <div className="services">
        <div className="services__container">
          <div className="services__grid grid--one">
            <div className="services__grid--item">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Services" />
            </div>
            <div className="services__grid--item">
              <h2 className="services__title">
                We offer coding bootcamp, etc...
              </h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam accusamus quam omnis nulla porro accusantium
                commodi fugiat? Minima fuga vitae, libero, officia culpa
                similique non dolorem, minus ea voluptatibus optio harum
                assumenda quibusdam deleniti. Vero accusamus laboriosam
                facere earum non.
              </p>
            </div>
          </div>
          <div className="services__grid grid--two">
            <div className="services__grid--item">
              <h2 className="services__title">
                We offer Tutoring systems, etc...
              </h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur vitae ad maxime quos iste! Fugiat temporibus
                tenetur blanditiis perferendis reiciendis ex ad qui minima
                accusamus aliquid voluptatem rerum dolorum, soluta
                eligendi nesciunt dolores fugit natus eos, facere earum
                vero eius?
              </p>
            </div>
            <div className="services__grid--item">
              <Img fluid={data.placeholderImage2.childImageSharp.fluid} alt="Services" />
            </div>
          </div>
        </div>
      </div>

    </Layout>

  );
};

export default Services;
