import React from 'react'
import profilePicKelsey from '../assets/images/kelsey.png'
import profilePicKate from '../assets/images/kate.png'
import { content } from '../../content'

const About = () => (
  <div className="section section-grey">
    <div className="row">

      <div className="three columns header-col">
        <h1>
          <span>About</span>
        </h1>
      </div>

      <div className="row">
        <div className="three columns header-col"></div>
        <div className="nine columns main-col">
          <h1>What we do</h1>
          <p>{content.what_blurb}</p>
        </div>
      </div>

      <div className="row">
        <div className="three columns header-col"></div>
        <div className="nine columns main-col">
          <h1>Who we work with</h1>
          <p>{content.who_we_work_with}</p>
        </div>
      </div>

      <div className="row">
        <div className="three columns header-col"></div>
        <div className="nine columns main-col">
          <h1>Who we are</h1>
          <p>{content.who}</p>
        </div>
      </div>

    </div>
    <br />

    <div className="row about-row">
      <div className="about-colum">
        <img className="profile-pic" src={profilePicKate} alt="Kate Aaby" />
        <h2>Kate Aaby</h2>
        <ul className="custom-bullet-list">
          {content.about.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="about-colum">
        <img className="profile-pic" src={profilePicKelsey} alt="Kelsey Do" />
        <h2>Kelsey Do</h2>
        <ul className="custom-bullet-list">
          {content.about2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div >
)

export default About
