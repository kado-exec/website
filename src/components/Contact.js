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
      <div className="nine columns main-col">

        <div className="row">
          <div className="six columns">
            <h3>Kate Aaby</h3>
            <ul>
              {content.contact.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

          </div>

          <div className="six columns">
            <h3>Kelsey Do</h3>
            <ul>
              {content.contact2.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

          </div>
        </div>
      </div>


    </div>
  </div>
)

export default Contact
