import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import SEO from "./SEO"

const Redirect = ({ intl }) => {
  return <SEO title={<FormattedMessage id="title" />} />
}

export default injectIntl(Redirect)
