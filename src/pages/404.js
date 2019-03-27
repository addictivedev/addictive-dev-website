import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

const NotFoundPage = () => (
  <I18n>
    {t => (
      <Layout>
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <h1>{t('pages.404.title')}</h1>
              <p>{t('pages.404.error')}</p>
            </div>
          </section>
        </div>
      </Layout>
    )}
  </I18n>
)

export default withI18next()(NotFoundPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
