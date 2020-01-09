import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ImagePane from "../components/ImagePane/ImagePane"
import Image from "../components/Image/Image"
import InfoPane from "../components/InfoPane/InfoPane"

export default ({ data }) => {
  return (
    <Layout>
      {data.images.edges.map(({ node }) => (
        <>
          <ImagePane>
            <Image key={node.id} fluid={node.src.childImageSharp.fluid} />
            <InfoPane>
              {node.location}
              {" | "}
              {node.description}
            </InfoPane>
          </ImagePane>
        </>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query Silvermax100Query {
    images: allSilvermax100Json {
      edges {
        node {
          id
          location
          description
          src {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
