import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout name={"home"}>
        <SEO title={"Home"} />
        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Web applications</h3>
                <p>
                  We provide both frontend and backend development services.
                  <br />
                  Our stack includes Elixir, Phoenix, Ruby on Rails, Javascript, Ember.js, React,
                  React Native.
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Mobile applications</h3>
                <p>
                  We provide cross platform mobile apps using React Native, with
                  a touch of native development.
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>UI/UX Design</h3>
                <p>
                  We offer prototyping, wireframing, branding, UI and UX design
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Blockchain and Dapps development</h3>
                <p>
                  We can create and deploy full Dapps and contracts on the Ethereum blockchain.
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Adtech specialists</h3>
                <p>
                  We have an extensive experience working with Facebook Ads API and
                  we can create tailored solutions for your business.
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Consultancy</h3>
                <p>
                  Do you have a challenging problem that need to be solved?
                  Hire us!
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>We create apps, big and small</h2>
              </header>
              <p>
                We offer full-stack mobile and web development services
                together with requirements analysis, quality assurance, and project
                management. We have all the expertise you need to produce a fully
                fledged, stable, and scalable product.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/services" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
