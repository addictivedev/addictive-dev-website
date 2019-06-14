import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'
import { graphql } from 'gatsby';
import { injectIntl, Link } from "gatsby-plugin-intl"

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Services = ({intl}) => (
  <Layout name={"services"}>
    <SEO title={"Services"} description={"Development services"} />
    <BannerLanding page="service" styles="service style2" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>{intl.formattedMessage({id: 'pages.services.title'})}</h2>
          </header>
          <p>
            {intl.formattedMessage({id: 'pages.services.desc_part_1'})}
            <br />
            {intl.formattedMessage({id: 'pages.services.desc_part_2'})}
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/services#footer" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>{intl.formattedMessage({id: 'pages.services.service1_title'})}</h3>
              </header>
              <p>
                {intl.formattedMessage({id: 'pages.services.service1_desc'})}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/services#footer" className="button">
                    {intl.formattedMessage({id: 'pages.services.service1_cta'})}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/services#footer" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>{intl.formattedMessage({id: 'pages.services.service2_title'})}</h3>
              </header>
              <p>
                {intl.formattedMessage({id: 'pages.services.service2_desc'})}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/services#footer" className="button">
                    {intl.formattedMessage({id: 'pages.services.service2_cta'})}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/services#footer" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>{intl.formattedMessage({id: 'pages.services.service3_title'})}</h3>
              </header>
              <p>
                {intl.formattedMessage({id: 'pages.services.service3_desc'})}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/services#footer" className="button">
                    {intl.formattedMessage({id: 'pages.services.service3_cta'})}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/services#footer" className="image">
            <img src={pic11} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>{intl.formattedMessage({id: 'pages.services.service4_title'})}</h3>
              </header>
              <p>
                {intl.formattedMessage({id: 'pages.services.service4_desc'})}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/services#footer" className="button">
                    {intl.formattedMessage({id: 'pages.services.service4_cta'})}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)
export default injectIntl(Services);

// export const query = graphql`
//   query($lng: String!) {
//     locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
//       ...TranslationFragment
//     }
//   }
// `;
