import React from 'react'

import About from './About'
import Services from './Services'
import Contact from './Contact'

const Sections = () => (
  <>
    <section id="about">
      <About />
    </section>

    <section id="services">
      <Services />
    </section>

    <section id="contacts">
      <Contact />
    </section>
  </>
)

export default Sections
