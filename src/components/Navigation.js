import React from 'react'
import logo from '../assets/images/logo.png'

const isCurrent = (anchor, pathname) =>
  pathname.endsWith(anchor) ? 'current' : ''
class Navigation extends React.Component {
  state = {
    pathname: '#home',
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ pathname: window.location.href })
    })
  }
  render() {
    const { pathname = '' } = this.state
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" />{' '}

        {/* eslint-disable-line */}
        <ul id="nav" className="nav">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{ margin: '10px 10px', height: '60px', marginRight: '10px', objectFit: 'contain' }}
          />
          <li className={isCurrent('#home', pathname)}>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className={isCurrent('#about', pathname)}>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li className={isCurrent('#services', pathname)}>
            <a className="smoothscroll" href="#services">
              Services
            </a>
          </li>
          <li className={isCurrent('#contacts', pathname)}>
            <a className="smoothscroll" href="#contacts">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
