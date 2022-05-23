import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'
import { injectIntl, Link, FormattedMessage } from 'gatsby-plugin-intl'

import pic01 from '../assets/images/logo_regione_veneto.png'

const Index = ({ intl }) => {
  const project = 'rotzo'
  return (
    <Layout name={'rotzo'}>
      <SEO title={'Gamification - Bostel di rotzo'} />
      <BannerLanding page="project_rotzo" styles="project-rotzo style2" />
      <div id="main">
        <section>
          <div className="inner">
            <img src={pic01} alt="logo regione veneto" width="240px" />
            <h5>
              <FormattedMessage
                id={`pages.projects.${project}.first_caption`}
              />
            </h5>
            <h5>
              <FormattedMessage
                id={`pages.projects.${project}.second_caption`}
              />
            </h5>
            <h5>
              <FormattedMessage
                id={`pages.projects.${project}.third_caption`}
              />
            </h5>
            <h5>
              <FormattedMessage
                id={`pages.projects.${project}.fourth_caption`}
              />
            </h5>
          </div>
        </section>
        <section id="one">
          <div className="inner">
            <h2>
              <FormattedMessage id={`pages.projects.${project}.title`} />
            </h2>
            <p>
              <FormattedMessage id={`pages.projects.${project}.key_points`} />
            </p>
            <ul>
              <li>
                <FormattedMessage
                  id={`pages.projects.${project}.first_point`}
                />
              </li>
              <li>
                <FormattedMessage
                  id={`pages.projects.${project}.second_point`}
                />
              </li>
              <li>
                <FormattedMessage
                  id={`pages.projects.${project}.third_point`}
                />
              </li>
              <li>
                <FormattedMessage
                  id={`pages.projects.${project}.fourth_point`}
                />
              </li>
            </ul>
            <p>
              <FormattedMessage
                id={`pages.projects.${project}.first_paragraph`}
              />
            </p>
            <p>
              <FormattedMessage
                id={`pages.projects.${project}.second_paragraph`}
              />
            </p>
            <p>
              <FormattedMessage
                id={`pages.projects.${project}.third_paragraph`}
              />
            </p>
            <p>
              <FormattedMessage
                id={`pages.projects.${project}.fourth_paragraph`}
              />
            </p>
            <p>
              <FormattedMessage
                id={`pages.projects.${project}.fifth_paragraph`}
              />
            </p>
            <p>
              <FormattedMessage
                id={`pages.projects.${project}.sixth_paragraph`}
              />
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default injectIntl(Index)
