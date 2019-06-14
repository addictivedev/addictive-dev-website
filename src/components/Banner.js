import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"

const Banner = ({children, data, linkTo, intl}) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>{intl.formatMessage({id: 'components.banner.title'})}</h1>
      </header>
      <div className="content">
        <p>
          {intl.formatMessage({id: 'components.banner.first_caption'})}
          <br />
          {intl.formatMessage({id: 'components.banner.second_caption'})}
        </p>
        <ul className="actions">
          <li>
            <a href={linkTo} className="button next scrolly">
              {intl.formattedMessage({id: 'components.banner.cta'})}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default injectIntl(Banner)
