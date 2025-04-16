import React from 'react'

import Education from './Education'
import Work from './Work'
import Skills from './Skills'

const Resume = () => (
  <>
    <section id="education">
      <Education />
    </section>

    <section id="work">
      <Work />
    </section>

    <section id="certs">
      <Skills />
    </section>
  </>
)

export default Resume
