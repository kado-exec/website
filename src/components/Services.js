import React from 'react';
import { content } from '../../content';

const Services = () => (
  <div className="section section-grey">
    <div className="row">
      <div className="three columns header-col">
        <h1>
          <span>Services</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {content.what.map((what, index) => (
          <div key={index} className="row item">
            <div className="twelve columns">
              <h3>{what.title}</h3>
              <p className="info">
                <i>{what.description}</i>
              </p>
              <div>
                <ul>
                  {what.bullets.map((bullets, bulletIndex) => (
                    <li key={bulletIndex}>• {bullets}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;