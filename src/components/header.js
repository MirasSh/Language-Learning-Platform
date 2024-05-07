import React from "react"
import img6 from "../images/111.png"
import { Link } from "gatsby"
import '../Scss/Header.css'

export default function header() {
  return (
    <div>
      <div>
        <Link to="/">
          <img className="img-header" src={img6}></img>
        </Link>
        
      </div>
    </div>
  )
}
