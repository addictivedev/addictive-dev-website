import React from 'react'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'
import SEO from '../../components/SEO'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import bet_1 from '../../assets/images/bet_1.png'
import bet_2 from '../../assets/images/bet_2.png'
import bet_3 from '../../assets/images/bet_3.png'
import bet_4 from '../../assets/images/bet_4.png'

const pageName = "betania";

const Betania = ({intl}) => (
  <Layout name={pageName}>
    <SEO title="Betania" description={"Use case of web app called Betania"} />
    <BannerLanding page="betania" styles="case betania"/>

    <div id="main">
      <section id="two" className="spotlights">
        <section className="spaced">
          <div className="image">
            <img src={bet_1} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <p>
                <FormattedMessage id='pages.betania.desc_part_1' />
              </p>
            </div>
          </div>
        </section>
        <section className="spaced">
          <div className="image">
            <img src={bet_2} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <p>
                <FormattedMessage id='pages.betania.desc_part_2' />
              </p>
            </div>
          </div>
        </section>
        <section className="spaced">
          <div className="image">
            <img src={bet_3} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <p>
                <FormattedMessage id='pages.betania.desc_part_3' />
              </p>
            </div>
          </div>
        </section>
        <section className="spaced">
          <div className="image">
            <img src={bet_4} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <p>
                <FormattedMessage id='pages.betania.desc_part_4' />
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)


export default injectIntl(Betania);
