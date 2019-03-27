import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';
import { Link } from 'gatsby-plugin-i18next';

// <li>
//   <Link onClick={props.onToggleMenu} to="/generic">
//     Generic
//   </Link>
// </li>
// <li>
//   <Link onClick={props.onToggleMenu} to="/elements">
//     Elements
//   </Link>
// </li>
const Menu = ({children, data, t, onToggleMenu}) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={onToggleMenu} to="/">
            {t('components.menu.home')}
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/services">
            {t('components.menu.services')}
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <Link onClick={onToggleMenu} to="/" className="button special fit">
            {t('components.menu.cta')}
          </Link>
        </li>
      </ul>
    </div>
    <button className="close" onClick={onToggleMenu}>
      {t('components.menu.close')}
    </button>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default translate()(Menu)
