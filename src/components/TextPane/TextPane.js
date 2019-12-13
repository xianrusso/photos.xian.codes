import React from "react"
import styled from "styled-components"

import Navigation from "../Navigation/Navigation"
import "./TextPane.css"

const TextPane = () => {
  return (
    <>
      <div className="text-container">
        <p>Christian Russo's Photos</p>
        <p>Hello! I'm a Developer from Baltimore, Maryland.</p>
        <Navigation></Navigation>
      </div>
    </>
  )
}

export default TextPane
