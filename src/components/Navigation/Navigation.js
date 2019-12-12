import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "./Navigation.css"

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">Roll 1</Link>
        <Link to="/two">Roll 2</Link>
      </nav>
    </>
  )
}

export default Navigation
