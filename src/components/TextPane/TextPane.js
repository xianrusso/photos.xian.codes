import React from "react"
import styled from "styled-components"

import Navigation from "../Navigation/Navigation"
import "./TextPane.css"

const TextPane = () => {
  return (
    <>
      <div className="text-container">
        <h2>Christian Russo</h2>
        <p>This is my photography portfolio</p>
        <Navigation></Navigation>
      </div>
    </>
  )
}

export default TextPane
