
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../Scss/Style.scss"
import Study from "./Study"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Study/>
    </>
  )
}

export default Layout
