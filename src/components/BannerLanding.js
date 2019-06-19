import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const BannerLanding = ({children, data, intl, page, styles}) => (
  <section id="banner" className={styles}>
    <div className="inner">
      <header className="major">
        <h1><FormattedMessage id={`components.banner_landing.${page}.title`} /></h1>
      </header>
      <div className="content">
        <p>
          <FormattedMessage id={`components.banner_landing.${page}.first_caption`} />
          <br />
          <FormattedMessage id={`components.banner_landing.${page}.second_caption`} />
        </p>
      </div>
    </div>
  </section>
)

BannerLanding.propTypes = {
  page: PropTypes.string,
}

export default injectIntl(BannerLanding)
