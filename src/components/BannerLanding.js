import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next';

const BannerLanding = ({children, data, t, page, styles}) => (
  <section id="banner" className={styles}>
    <div className="inner">
      <header className="major">
        <h1>{t(`components.banner_landing.${page}.title`)}</h1>
      </header>
      <div className="content">
        <p>
          {t(`components.banner_landing.${page}.first_caption`)}
          <br />
          {t(`components.banner_landing.${page}.second_caption`)}
        </p>
      </div>
    </div>
  </section>
)

BannerLanding.propTypes = {
  page: PropTypes.string,
}

export default translate()(BannerLanding)
