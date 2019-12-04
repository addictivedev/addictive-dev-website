import React from 'react'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'
import SEO from '../../components/SEO'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import abp_1 from '../../assets/images/abp_1.png'
import abp_2 from '../../assets/images/abp_2.png'
import abp_3 from '../../assets/images/abp_3.png'

const pageName = "automatic-boost-post";

const AutomaticBoostPost = ({intl}) => (
  <Layout name={pageName}>
    <SEO title="Automatic boost post" description={"Use case of web app called Automatic Boost Post"} />
    <BannerLanding page="automaticboostpost" styles="case automaticboostpost"/>

    <div id="main">
      <section id="two" className="spotlights">
        <section className="spaced">
          <div className="image">
            <img src={abp_1} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <p>
                <FormattedMessage id='pages.automaticboostpost.desc_part_1' />
              </p>
            </div>
          </div>
        </section>
        <section className="spaced">
          <div className="image">
            <img src={abp_2} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <p>
                <FormattedMessage id='pages.automaticboostpost.desc_part_2' />
              </p>
            </div>
          </div>
        </section>
        <section className="spaced">
          <div className="image">
            <img src={abp_3} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <p>
                <FormattedMessage id='pages.automaticboostpost.desc_part_3' />
              </p>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="inner">
          <header className="major">
            <h2><FormattedMessage id='pages.automaticboostpost.prefooter_title' /></h2>
          </header>
          <p>
            <FormattedMessage id='pages.automaticboostpost.prefooter_body' />
          </p>
          <ul className="actions">
            <li>
              <a href="https://pitchtarget.com" className="button next">
                <FormattedMessage id='pages.automaticboostpost.prefooter_cta' />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)


export default injectIntl(AutomaticBoostPost);
