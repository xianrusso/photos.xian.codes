import React, { useEffect, useRef } from "react"

import TextPane from "../components/TextPane/TextPane"

import "./layout.css"

const Layout = ({ children }) => {
  let content = useRef()

  useEffect(
    e => {
      function useScroll(e) {
        e.preventDefault()
        if (content === undefined || !content) {
          content.current = document.querySelector(".container")
        } else {
          content.current.scrollLeft += e.deltaY
        }
      }
      window.addEventListener("mousewheel", useScroll)
      return () => {
        window.removeEventListener("mousewheel", useScroll)
      }
    },
    [content]
  )

  return (
    <>
      <div className="container" ref={content}>
        <TextPane></TextPane>
        {children}
      </div>
    </>
  )
}

export default Layout
