import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  it: "Italiano",
}

const Language = () => {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <li key={language} style={{ display: 'inline' }}>
              <button
                style={{
                  letterSpacing: '0.15em',
                  background: 'transparent',
                  color: 'white',
                  textDecoration: language === currentLocale ? 'underline' : 'none',
                }}
                onClick={() => changeLocale(language)}
              >
                {languageName[language]}
              </button>
            </li>
          ))
        }
      </IntlContextConsumer>
    </ul>
  )
}

export default Language
