import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, Link } from "gatsby-plugin-intl"
import Language from './Language';

const Menu = ({children, data, intl, onToggleMenu}) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={onToggleMenu} to="/">
            {intl.formatMessage({id: 'components.menu.home'})}
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/services">
            {intl.formatMessage({id: 'components.menu.services'})}
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
            {intl.formatMessage({id: 'components.menu.cta'})}
          </Link>
        </li>
      </ul>
      <Language />
    </div>
    <button className="close" onClick={onToggleMenu}>
      {intl.formatMessage({id: 'components.menu.close'})}
    </button>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default injectIntl(Menu)
