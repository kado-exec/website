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
          {content.description}
        </span>
      </h3><br /><br /><br /><br /><br />
      <a className="smoothscroll" href="#about">
        Start scrolling for more info about us
      </a>

      <br />
      <hr />
      <SocialLinks />
    </div>
  </div>
)

export default Banner
