import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby-plugin-i18next';
import { translate } from 'react-i18next';

const Header = ({children, data, t, onToggleMenu}) => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>Addictive</strong> <span>dev</span>
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

export default translate()(Header)
