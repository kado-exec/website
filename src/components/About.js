import React from 'react'
import profilePic from '../assets/images/profile2.png'
import { resume } from '../../resume'

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          {resume.about}
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              {resume.contact.map((info) => (
                <>
                  <span>{info}</span>
                  <br />
                </>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
