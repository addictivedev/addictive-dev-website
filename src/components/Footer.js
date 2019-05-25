import React from 'react'
import { translate } from 'react-i18next';

const Footer = ({children, data, t}) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a rel="noopener noreferrer" href="https://twitter.com/AddictiveDev" target="_blank" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://www.facebook.com/addictivedotdev" target="_blank" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://github.com/addictivedev" target="_blank" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://www.linkedin.com/company/addictivedev" target="_blank" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://www.iubenda.com/privacy-policy/950075" target="_blank">Privacy Policy</a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://www.iubenda.com/privacy-policy/950075/cookie-policy?an=no&amp;s_ck=false" target="_blank">Cookie Policy</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default translate()(Footer)
