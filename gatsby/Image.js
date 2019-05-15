import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const Image = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const img = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      );

      if (!img) {
        return null;
      }
      return <Img fluid={Image.node.fluid} />;
    }}
  />
);

export default Image;
