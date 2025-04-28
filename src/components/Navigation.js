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
      <nav id="nav-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          className="logo"
          src={logo}
          alt="logo"
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <ul id="nav" className="nav" style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li className={isCurrent('#home', pathname)} style={{ margin: '0 10px' }}>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className={isCurrent('#about', pathname)} style={{ margin: '0 10px' }}>
            <a className="smoothscroll" href="#about">
              Leadership
            </a>
          </li>
          <li className={isCurrent('#who', pathname)} style={{ margin: '0 10px' }}>
            <a className="smoothscroll" href="#who">
              Who we are
            </a>
          </li>
          <li className={isCurrent('#what', pathname)} style={{ margin: '0 10px' }}>
            <a className="smoothscroll" href="#what">
              What we do
            </a>
          </li>
          <li className={isCurrent('#clients', pathname)} style={{ margin: '0 10px' }}>
            <a className="smoothscroll" href="#clients">
              Who we work with
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
