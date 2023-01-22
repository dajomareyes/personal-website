import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const styles = {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
  };
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar-david.jpeg" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img 
    fixed={data.placeholderImage.childImageSharp.fixed} 
    style={styles}
    />
}

export default Image
