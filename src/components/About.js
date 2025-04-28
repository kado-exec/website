import React from 'react'
import profilePicKelsey from '../assets/images/kelsey.png'
import profilePicKate from '../assets/images/kate.png'
import { content } from '../../content'

const About = () => (
  <section id="about">
    <div className="row">
      {/* Left Column - Person 1 */}
      <div className="six columns about-card">
        <img className="profile-pic" src={profilePicKate} alt="Profile 1" />
        <h2>Kate</h2>
        <p>{content.about}</p>
      </div>

      {/* Right Column - Person 2 */}
      <div className="six columns about-card">
        <img className="profile-pic" src={profilePicKelsey} alt="Profile 2" />
        <h2>Kelsey</h2>
        <p>{content.about2}</p>
      </div>
    </div>
  </section>
)

export default About
