import React from 'react'
import { content } from '../../content'

const clients = () => (
  <div className="section section-grey">
    <div className="row">
      <div className="three columns header-col">
        <h1>
          <span>Who we work with</span>
        </h1>
      </div>
      <div className="nine columns main-col">
        <h3>{content.who_we_work_with}</h3>

      </div>
    </div>
  </div>
)

export default clients
