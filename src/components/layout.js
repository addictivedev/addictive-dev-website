import React from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
import CookieConsent from "react-cookie-consent";
import TagManager from 'react-gtm-module'

const gtmArgs = {
  gtmId: "GTM-KKHK9X",
  auth: "qsHV_lc5rjbAUA17MMfn7g",
  preview: "env-3",
};

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || 'generic_event',
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.onAcceptCookies = this.onAcceptCookies.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('cookiesAccepted')) {
      console.log('cookies already accepted');
      TagManager.initialize(gtmArgs);
    }
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  onAcceptCookies() {
    localStorage.setItem('cookiesAccepted', true);
    TagManager.initialize(gtmArgs);
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children}
          <Contact />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
        <CookieConsent onAccept={this.onAcceptCookies}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    )
  }
}

export default Layout
