import React from 'react'
import { content } from '../../content'

const Who = () => (
  <div className="row section">
    <font color="#0353a3">
      <div className="three columns header-col">
        <h1>
          {/* <span>Education</span> */}
          <span>Who we are</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {content.who.map((item) => (
          <>
            <div className="row item">
              <div className="twelve columns">
                <h3><li>{item}</li></h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </font >
  </div>
)

export default Who
