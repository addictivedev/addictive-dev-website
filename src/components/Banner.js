import React from 'react'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Banner = ({children, data, linkTo, intl}) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1><FormattedMessage id='components.banner.title' /></h1>
      </header>
      <div className="content">
        <p>
          <FormattedMessage id='components.banner.first_caption' />
          <br />
          <FormattedMessage id='components.banner.second_caption' />
        </p>
        <ul className="actions">
          <li>
            <a href={linkTo} className="button next scrolly">
              <FormattedMessage id='components.banner.cta' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default injectIntl(Banner)
