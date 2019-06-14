import React from 'react'
import PropTypes from 'prop-types'
import logo from '../assets/images/logo-addictive.svg';
import { injectIntl, Link } from "gatsby-plugin-intl"

const Header = ({children, data, intl, onToggleMenu}) => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <img className="logo--image" src={logo} alt="Addictive"/>
    </Link>
    <nav>
      <button className="menu-link" onClick={onToggleMenu}>
      </button>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default injectIntl(Header)
