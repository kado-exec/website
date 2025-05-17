import React from 'react'

import About from './About'
import Offerings from './Offerings'
import Contact from './Contact'

const Sections = () => (
  <>
    <section id="about">
      <About />
    </section>

    <section id="offerings">
      <Offerings />
    </section>

    <section id="contacts">
      <Contact />
    </section>
  </>
)

export default Sections
