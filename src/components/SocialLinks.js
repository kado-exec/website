import React from 'react'
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaEnvelopeSquare,
  FaLinkedin,
} from 'react-icons/fa'
// http://react-icons.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">

    <li>
      <a
        href="https://www.linkedin.com/company/kado-executive-operations-llc/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="mailto:kelsey@kadoexec.com" target="_blank" rel="noreferrer">
        <FaEnvelopeSquare />
      </a>
    </li>

  </ul>
)

export default SocialLinks
