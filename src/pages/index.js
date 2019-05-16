import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const HomeIndex = () => (
  <I18n>
    {t => (
      <Layout name={"home"}>
        <SEO title={"Home"} />
        <Banner linkTo="/use-cases"/>

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link to="/services" className="link primary">
                <header className="major">
                  <h3>{t('pages.index.tile1_title')}</h3>
                  <p>
                    {t('pages.index.tile1_desc_1')}
                    <br />
                    {t('pages.index.tile1_desc_2')}
                  </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link to="/services" className="link primary">
                <header className="major">
                  <h3>{t('pages.index.tile2_title')}</h3>
                  <p>
                    {t('pages.index.tile2_desc_1')}
                  </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <Link to="/services" className="link primary">
                <header className="major">
                  <h3>{t('pages.index.tile3_title')}</h3>
                  <p>
                    {t('pages.index.tile3_desc_1')}
                  </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link to="/services" className="link primary">
                <header className="major">
                  <h3>{t('pages.index.tile4_title')}</h3>
                  <p>
                    {t('pages.index.tile4_desc_1')}
                  </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <Link to="/services" className="link primary">
                <header className="major">
                  <h3>{t('pages.index.tile5_title')}</h3>
                  <p>
                    {t('pages.index.tile5_desc_1')}
                  </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <Link to="/services" className="link primary">
                <header className="major">
                  <h3>{t('pages.index.tile6_title')}</h3>
                  <p>
                    {t('pages.index.tile6_desc_1')}
                  </p>
                </header>
              </Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>{t('pages.index.prefooter_title')}</h2>
              </header>
              <p>
                {t('pages.index.prefooter_body')}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/services" className="button next">
                    {t('pages.index.cta')}
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )}
  </I18n>
)
export default withI18next()(HomeIndex);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
