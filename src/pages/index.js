import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get";



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query InstagramQuery {
    allInstagramContent {
      edges {
        node {
          localImage {
            
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
          }
        }
      }
    }
  }
}
`)
  let arrayOfInstaImages = _get(data, 'allInstagramContent.edges')

  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, display: 'flex' }}>
        {arrayOfInstaImages.map((item, i) => {
          return (
            <div key={i} style={{ width: "200px", height: "200px" }}>
              <Img fixed={item.node.localImage.childImageSharp.fixed} />
            </div>)
        })}
      </div>

    </Layout>)
}


export default IndexPage
