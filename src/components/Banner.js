import React from 'react'
import SocialLinks from './SocialLinks'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { content } from '../../content'

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{content.author}</h1>
      <h3>
        <span>
          {content.subtitle}
        </span><br />
        <span>
          {content.description}
        </span>
      </h3><br /><br />
      <SocialLinks />
    </div>
  </div>
)

export default Banner
