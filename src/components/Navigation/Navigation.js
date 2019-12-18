import React from "react"
import { Link } from "gatsby"

import "./Navigation.css"

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">Roll 1</Link>
        <Link to="/fujic200">Fuji C200</Link>
        <Link to="/portra160">Kodak Portra 160</Link>
        <Link to="/portra400">Kodak Portra 400</Link>
        <Link to="/trix400">Kodak Tri-X 400</Link>
        <Link to="/provia100f">Fujichrome Provia 100F</Link>
        <Link to="/delta400">Ilford Delta 400</Link>
        <Link to="/silvermax100">Adox Silvermax 100</Link>
      </nav>
    </>
  )
}

export default Navigation
