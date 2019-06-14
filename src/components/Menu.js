import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, Link } from "gatsby-plugin-intl"

// import Switcher from './Switcher';
      // <Switcher />
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
const Menu = ({children, data, intl, onToggleMenu}) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={onToggleMenu} to="/">
            {intl.formattedMessage({id: 'components.menu.home'})}
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/services">
            {intl.formattedMessage({id: 'components.menu.services'})}
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/use-cases">
            {t('components.menu.useCases')}
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <Link onClick={onToggleMenu} to="/" className="button special fit">
            {intl.formattedMessage({id: 'components.menu.cta'})}
          </Link>
        </li>
      </ul>
    </div>
    <button className="close" onClick={onToggleMenu}>
      {intl.formattedMessage({id: 'components.menu.close'})}
    </button>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default injectIntl(Menu)
