import React from 'react'
import { content } from '../../content'

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">
        {content.author}
      </h1>

      <h3>
        <span>
          {content.description}
        </span>
      </h3><br /><br />
    </div>
  </div>
)

export default Banner
