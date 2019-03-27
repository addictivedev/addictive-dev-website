import React from 'react'
import { translate } from 'react-i18next';

const Banner = ({children, data, t}) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>{t('components.banner.title')}</h1>
      </header>
      <div className="content">
        <p>
          {t('components.banner.first_caption')}
          <br />
          {t('components.banner.second_caption')}
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              {t('components.banner.cta')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default translate()(Banner)
