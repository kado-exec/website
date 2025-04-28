import React from 'react'
import { content } from '../../content'

const Work = () => (
  <div className="section section-green">
    <div className="row">
      <font color="#0353a3">
        <div className="three columns header-col">
          <h1>
            <span>What we do</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p className="what-blurb">{content.what_blurb}</p>
        </div>
        <div className="nine columns main-col">
          {content.what.map((what) => (
            <>
              <div className="row item">
                <div className="twelve columns">
                  <h3>{what.title}</h3>
                  <p className="info">
                    <i>{what.description}</i>
                  </p>

                  <p>
                    <ul>
                      {what.bullets.map((bullets) => (
                        <li>• {bullets}</li>
                      ))}
                    </ul>
                  </p>
                  <p className="info">
                    <i>{what.outcome}</i>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </font>
    </div>
  </div>
)

export default Work
