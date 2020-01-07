import React, { useState } from "react"
import { Link } from "gatsby"

import "./Navigation.css"

const Navigation = () => {
  function activate() {
    document.querySelectorAll(Link).classList.remove("active")
    document.querySelector(this).classList.add("active")
  }
  return (
    <>
      <nav>
        <Link to="/" onClick={() => activate()}>
          Roll 1
        </Link>
        <Link to="/silvermax100" onClick={() => activate()}>
          Adox Silvermax 100
        </Link>
        <Link to="/classic100" onClick={() => activate()}>
          Fomapan Classic 100
        </Link>
        <Link to="/provia100f">Fujichrome Provia 100F</Link>
        <Link to="/fujic200">Fuji C200</Link>
        <Link to="/superia400">Fuji Superia X-TRA 400</Link>
        <Link to="/delta400">Ilford Delta 400</Link>
        <Link to="/gold200">Kodak Gold 200</Link>
        <Link to="/portra160">Kodak Portra 160</Link>
        <Link to="/portra400">Kodak Portra 400</Link>
        <Link to="/trix400">Kodak Tri-X 400</Link>
        <Link to="ultramax400">Kodak Ultramax 400</Link>
      </nav>
    </>
  )
}

export default Navigation
