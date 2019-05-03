import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import pic_abp from '../assets/images/pic-abp.jpg'
import pic_li from '../assets/images/pic-li.jpg'
import pic_fs from '../assets/images/pic-fs.jpg'


const pageName = "use-cases";

const useCases = () => (
  <I18n>
    {t => (
      <Layout name={pageName}>
        <SEO title="Use cases" description={"Collection of development projects"} />
        <BannerLanding page="useCases" styles="use-cases style3"/>

        <div id="main">
          <section id="two" className="spotlights">
            <section>
              <Link to={`/${pageName}#footer`} className="image">
                <img src={pic_abp} alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{t('pages.useCases.abp_title')}</h3>
                    <h6><small className="labels">{t('pages.useCases.abp_labels')}</small></h6>
                  </header>
                  <p>
                    {t('pages.useCases.abp_desc')}
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="https://pitchtarget.com" target="_blank" className="button">
                        {t('pages.useCases.abp_cta')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link to={`/${pageName}#footer`} className="image">
                <img src={pic_li} alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{t('pages.useCases.li_title')}</h3>
                    <h6><small className="labels">{t('pages.useCases.li_labels')}</small></h6>
                  </header>
                  <p>
                    {t('pages.useCases.li_desc')}
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="https://localimpact.it" target="_blank" className="button">
                        {t('pages.useCases.li_cta')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link to={`/${pageName}#footer`} className="image">
                <img src={pic_fs} alt="" />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{t('pages.useCases.fs_title')}</h3>
                    <h6><small className="labels">{t('pages.useCases.fs_labels')}</small></h6>
                  </header>
                  <p>
                    {t('pages.useCases.fs_desc')}
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="https://feedstock.com" target="_blank" className="button">
                        {t('pages.useCases.fs_cta')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </section>
        </div>
      </Layout>
    )}
  </I18n>
)
export default withI18next()(useCases);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
