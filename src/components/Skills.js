import React from 'react'
import { resume } from '../../resume'

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Certifications</span>
      </h1>
    </div>
    <div className="nine columns main-col">
      {resume.certifications.map((cert) => (
        <>
          <div className="row item">
            <div className="twelve columns">
              <h4><li>{cert}</li></h4>
            </div>
          </div>
        </>
      ))}

    </div>
  </div>
)

export default Skills
