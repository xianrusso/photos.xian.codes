import React from "react"

import Navigation from "../Navigation/Navigation"
import "./TextPane.css"

const TextPane = () => {
  return (
    <>
      <div className="text-container">
        <p>Christian Russo's Photos</p>
        <p>
          This is mainly a compendium of photos taken during my travels and of
          my home city. Enjoy... or don't.
        </p>
        <Navigation></Navigation>
        <p>
          Hit me up on&nbsp;
          <a href="https://github.com/xianrusso" className="links">
            GitHub
          </a>
          &nbsp;or&nbsp;
          <a href="https://www.instagram.com/fotoxian/" className="links">
            Instagram
          </a>
          &nbsp;
        </p>
      </div>
    </>
  )
}

export default TextPane
