import React from 'react'
import SocialLinks from './SocialLinks'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { resume } from '../../resume'

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{resume.author}</h1>
      <h3>
        <span>
          {resume.description}
        </span>
      </h3><br /><br /><br /><br /><br />
      <a className="smoothscroll" href="#about">
        Start scrolling for more info about me
      </a>

      <br />
      <div className="banner-text">
        <p>
          <a
            href="https://docs.google.com/document/d/1LY4l4YPPRe4KwKdYZh3ujUqqtE4DXgB7UDYs8fK4aus/export?format=pdf"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            <FaCloudDownloadAlt /> Download Resume
          </a>
        </p>
      </div>
      <hr />
      <SocialLinks />
    </div>
  </div>
)

export default Banner
