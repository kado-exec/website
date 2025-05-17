import React from 'react'
import { content } from '../../content'

const Contact = () => (
  <div className="section section-grey">
    <div className="row">
      <div className="three columns header-col">
        <h1>
          <span>Contact</span>
        </h1>
      </div>

      <div className="row about-row">
        <div className="about-colum">
          <h2>Kate Aaby</h2>
          <ul className="custom-bullet-list">
            {content.contact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-colum">
          <h2>Kelsey Do</h2>
          <ul className="custom-bullet-list">
            {content.contact2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </div>
)

export default Contact
