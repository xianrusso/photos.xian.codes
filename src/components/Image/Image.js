import React from "react"
import Img from "gatsby-image"

import "./Image.css"

// const Image = styled(Img)`
//   height: calc(100vh);
//   width: calc(100vw - 350px);
// `

const Image = ({ key, fluid }) => {
  return <Img className="image" key={key} fluid={fluid} />
}

export default Image
