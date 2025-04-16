import React from 'react'
import { resume } from '../../resume'

const Education = () => (
  <div className="row education">
    <font color="#0353a3">
      <div className="three columns header-col">
        <h1>
          {/* <span>Education</span> */}
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {resume.education.map((school) => (
          <>
            <div className="row item">
              <div className="twelve columns">
                <h3>{school.name}</h3>
                <p>
                  {school.degree} - <em className="date">{school.year}</em>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </font >
  </div>
)

export default Education
