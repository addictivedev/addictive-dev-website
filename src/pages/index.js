import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'
import { injectIntl, Link, FormattedMessage } from 'gatsby-plugin-intl'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic07 from '../assets/images/logo_regione_veneto.png'

const Index = ({ intl }) => (
  <Layout name={'home'}>
    <SEO title={'Home'} />
    <Banner linkTo="/use-cases" />

    <div id="main">
      <section id="one" className="tiles">
        <article style={{ backgroundImage: `url(${pic01})` }}>
          <Link to="/services" className="link primary">
            <header className="major">
              <h3>
                <FormattedMessage id="pages.index.tile1_title" />
              </h3>
              <p>
                <FormattedMessage id="pages.index.tile1_desc_1" />
                <br />
                <FormattedMessage id="pages.index.tile1_desc_2" />
              </p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic02})` }}>
          <Link to="/services" className="link primary">
            <header className="major">
              <h3>
                <FormattedMessage id="pages.index.tile2_title" />
              </h3>
              <p>
                <FormattedMessage id="pages.index.tile2_desc_1" />
              </p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic03})` }}>
          <Link to="/services" className="link primary">
            <header className="major">
              <h3>
                <FormattedMessage id="pages.index.tile3_title" />
              </h3>
              <p>
                <FormattedMessage id="pages.index.tile3_desc_1" />
              </p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic04})` }}>
          <Link to="/services" className="link primary">
            <header className="major">
              <h3>
                <FormattedMessage id="pages.index.tile4_title" />
              </h3>
              <p>
                <FormattedMessage id="pages.index.tile4_desc_1" />
              </p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic05})` }}>
          <Link to="/use-cases#automaticboostpost" className="link primary">
            <header className="major">
              <h3>
                <FormattedMessage id="pages.index.tile5_title" />
              </h3>
              <p>
                <FormattedMessage id="pages.index.tile5_desc_1" />
              </p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic06})` }}>
          <Link to="/services" className="link primary">
            <header className="major">
              <h3>
                <FormattedMessage id="pages.index.tile6_title" />
              </h3>
              <p>
                <FormattedMessage id="pages.index.tile6_desc_1" />
              </p>
            </header>
          </Link>
        </article>
      </section>
      <section id="banner" className="projects project-rotzo">
      <div className="inner">
        <header className="major">
          <h1>
            <FormattedMessage id="components.project_1.title" />
          </h1>
        </header>
        <div className="content">
          <p>
            <FormattedMessage id="components.project_1.first_caption" />
            <br />
            <FormattedMessage id="components.project_1.second_caption" />
          </p>
          <ul className="actions">
            <li>
              <a href={'/rotzo-project'} className="button next scrolly">
                <FormattedMessage id="components.project_1.cta" />
              </a>
            </li>
          </ul>
        </div>
        <img src={pic07} alt="POR - logo regione veneto" width="180px" />
      </div>
    </section>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>
              <FormattedMessage id="pages.index.prefooter_title" />
            </h2>
          </header>
          <p>
            <FormattedMessage id="pages.index.prefooter_body" />
          </p>
          <ul className="actions">
            <li>
              <Link to="/services" className="button next">
                <FormattedMessage id="pages.index.cta" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)
export default injectIntl(Index)
