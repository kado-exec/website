import React from 'react'
import profilePic from '../assets/images/profile2.png'
import { resume } from '../../content'

const About = () => (
  <section id="about">
    <div className="row">
      {/* Left Column - Person 1 */}
      <div className="six columns about-card">
        <img className="profile-pic" src={profilePic} alt="Profile 1" />
        <h2>About Me</h2>
        <p>{content.about}</p>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            {content.contact.map((info, index) => (
              <React.Fragment key={index}>
                <span>{info}</span>
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      {/* Right Column - Person 2 */}
      <div className="six columns about-card">
        <img className="profile-pic" src={profilePic} alt="Profile 2" />
        <h2>About Me</h2>
        <p>{content.about2}</p> {/* Add a second `about2` field to your content.js */}
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            {content.contact2.map((info, index) => (
              <React.Fragment key={index}>
                <span>{info}</span>
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
