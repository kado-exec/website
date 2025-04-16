import React from 'react'
import { resume } from '../../resume'

const Work = () => (
  <div className="row work">
    <font color="#0353a3">
      <div className="three columns header-col">
        <h1>
          <span>Work</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {resume.work.map((work) => (
          <>
            <div className="row item">
              <div className="twelve columns">
                <h3>{work.employer}</h3>
                <p className="info">
                  {work.title}
                  <span>&bull;</span>
                  <em className="date">{work.start_date} - {work.end_date}</em>
                </p>

                <p>
                  <ul>
                    {work.experience.map((experience) => (
                      <li>• {experience}</li>
                    ))}
                  </ul>
                </p>

              </div>
            </div>
          </>
        ))}
      </div>
    </font>
  </div>
)

export default Work
