import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ImagePane from "../components/ImagePane/ImagePane"
import Image from "../components/Image/Image"

export default ({ data }) => {
  return (
    <Layout>
      {data.images.edges.map(({ node }) => (
        <ImagePane>
          <Image key={node.id} fluid={node.childImageSharp.fluid} />
        </ImagePane>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query Classic100Query {
    images: allFile(filter: { sourceInstanceName: { eq: "classic100" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
