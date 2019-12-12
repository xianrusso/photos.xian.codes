import React, { useEffect, useRef, useLayoutEffect } from "react"

import TextPane from "../components/TextPane/TextPane"

import "./layout.css"

const Layout = ({ children }) => {
  let content = document.querySelector(".container")
  window.addEventListener("mousewheel", useScroll)

  function useScroll(e) {
    e.preventDefault()
    if (content === undefined || !content) {
      content = document.querySelector(".container")
    } else {
      content.scrollLeft += e.deltaY
    }
  }
  return (
    <>
      <div className="container">
        <TextPane></TextPane>
        {children}
      </div>
    </>
  )
}

export default Layout
