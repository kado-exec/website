import React from 'react'
import { content } from '../../content'
import logo from '../assets/images/logo.png'


const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">
        {content.author}
      </h1>

      <img className="mobile-logo" src={logo} alt="Logo" />
      {/* <h3>
        <span>
          {content.description}
        </span>
      </h3><br /><br /> */}
      <div className="intro-text">
        Behind the Scenes Partner
        <br />Demystifying Complexity to Achieve CEO Growth Goals
      </div>
    </div>
  </div>
)

export default Banner
