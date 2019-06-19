import React from 'react'
import Layout from '../components/layout'
import { injectIntl } from "gatsby-plugin-intl"

const NotFoundPage = ({intl}) => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>{intl.formattedMessage({id: 'pages.404.title'})}</h1>
          <p>{intl.formattedMessage({id: 'pages.404.error'})}</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default injectIntl(NotFoundPage);
