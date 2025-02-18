import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const imageStyle = {
  padding: "0px 12px",
};

export const IndexPageTemplate = ({
  subheading,
}) => (
  <div>
    <Carousel
      showThumbs={false}
      centerSlidePercentage={55}
      autoPlay
      showArrows
      infiniteLoop
      stopOnHover
      centerMode
    >
      <div style={imageStyle}>
        <img src="/img/1686808769079.jpg" alt="bread image" />
      </div>
      <div style={imageStyle}>
        <img src="/img/1686808768862.jpg" alt="bread image" />
      </div>
      <div style={imageStyle}>
        <img src="/img/1686808768968.jpg" alt="bread image" />
      </div>
      <div style={imageStyle}>
        <img src="/img/1686808769023.jpg" alt="bread image" />
      </div>
    </Carousel>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "72px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        {/* <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1> */}
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            // boxShadow:
              // "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            // backgroundColor: "rgb(255, 68, 0)",
            // color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <div className="container">
      <div className="column is-10 is-offset-1">
        <div className="content">
          {/* <div className="content">
            <div className="tile">
              <h1 className="title">{mainpitch.title}</h1>
            </div>
            <div className="tile">
              <h3 className="subtitle">{mainpitch.description}</h3>
            </div>
          </div> */}
          {/* <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">
                {heading}
              </h3>
              <p>{description}</p>
            </div>
          </div> */}
          {/* <Features gridItems={intro.blurbs} /> */}
          {/* <div className="columns">
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/products">
                See all products
              </Link>
            </div>
          </div> */}
          <div className="column is-12">
            <h3>
              News
            </h3>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
