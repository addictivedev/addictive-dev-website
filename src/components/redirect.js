import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "./SEO"

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formattedMessage({ id: "title" })}`} />
}

export default injectIntl(Redirect)
