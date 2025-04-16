import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet"
import { siteMetadata } from '../../gatsby-config'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>christopher.do</title>
      <meta name="author" description={siteMetadata.author} />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link
        rel="icon"
        href="../assets/images/favicon.png"
        type="image/x-icon"
      />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
