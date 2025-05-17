import React from 'react'
import { content } from '../../content'

const Offerings = () => (
  <div className="section section-grey">
    <div className="row">
      <div className="three columns header-col">
        <h1>
          <span>Offerings</span>
        </h1>
      </div>

      <div className="nine columns main-col">

        <div className="row">
          {/* Left Column */}
          <div className="six columns">
            <h3>{content.what[0].title}</h3>
            <p className="info">
              <i>{content.what[0].description}</i>
            </p>
            <ul>
              {content.what[0].bullets.map((bullet, index) => (
                <li key={index}>• {bullet}</li>
              ))}
            </ul>
            <p className="info">
              <i>{content.what[0].outcome}</i>
            </p>
          </div>

          {/* Right Column */}
          <div className="six columns">
            <h3>{content.what[1].title}</h3>
            <p className="info">
              <i>{content.what[1].description}</i>
            </p>
            <ul>
              {content.what[1].bullets.map((bullet, index) => (
                <li key={index}>• {bullet}</li>
              ))}
            </ul>
            <p className="info">
              <i>{content.what[1].outcome}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


)

export default Offerings