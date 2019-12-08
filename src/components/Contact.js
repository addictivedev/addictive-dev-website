import React from 'react'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Contact = ({children, data, intl}) => (
  <section id="contact">
    <div className="inner">
      <section className="grid-wrapper">
        <section className="col-6">
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:info@addictive.dev">info@addictive.dev</a>
          </div>
        </section>
        <section className="col-6">
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3><FormattedMessage id='components.contact.phone' /></h3>
            <span>+390422789611</span>
          </div>
        </section>
        <section className="col-6">
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3><FormattedMessage id='components.contact.address' /></h3>
            <span>
              Via Sile 41
              <br />
              31056 Roncade, TV
              <br />
              Italy
            </span>
          </div>
        </section>
        <section className="col-6">
          <div className="contact-method">
            <span className="icon alt fa-info" />
            <h3><FormattedMessage id='components.contact.vat' /></h3>
            <span>
              IT04636600266
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default injectIntl(Contact)
