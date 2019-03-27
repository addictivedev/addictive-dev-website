import React from 'react'
import { translate } from 'react-i18next';

const BannerLanding = ({children, data, t}) => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>{t('components.banner_landing.title')}</h1>
      </header>
      <div className="content">
        <p>
          {t('components.banner_landing.first_caption')}
          <br />
          {t('components.banner_landing.second_caption')}
        </p>
      </div>
    </div>
  </section>
)

export default translate()(BannerLanding)
