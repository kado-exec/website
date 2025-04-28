import React from 'react'
import { content } from '../../content'

const Who = () => (
  <div className="section section-green">
    <div class="row">
      <font color="#0353a3">
        <div className="three columns header-col">
          <h1>
            <span>Who we are</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {content.who}
        </div>
      </font ></div>
  </div>
)

export default Who
