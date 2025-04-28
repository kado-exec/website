import React from 'react'

import Who from './Who'
import What from './What'
import Clients from './Clients'
import About from './About'

const Sections = () => (
  <>
    <section id="who">
      <Who />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="what">
      <What />
    </section>

    <section id="clients">
      <Clients />
    </section>
  </>
)

export default Sections
