import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Services = props => (
  <Layout>
    <Helmet>
      <title>Addictive Services</title>
      <meta name="description" content="Development services" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>From raw idea to scalable product</h2>
          </header>
          <p>
            We provide professional full-cycle mobile and web development services,
            from project analysis to post release support.
            <br />
            We have all the expertise you need to produce a fully
            fledged, stable, and scalable product.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Analysis, wireframing, prototyping </h3>
              </header>
              <p>
                We elicit your requirements, prepare a product specification,
                and design wireframes. These wireframes are later transformed
                into a prototype you can actually click on. Our prototypes
                include animations, transitions, and interactions.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Design and Development</h3>
              </header>
              <p>
                With a strong grasp of frontend and backend technologies,
                we create designs that are reinforced with high-quality code.
                We specialize in JavaScript, React, React Native, Ruby on Rails, and Elixir development.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Testing</h3>
              </header>
              <p>
                We apply both manual and automated testing to all digital
                products we develop to make sure they are efficient, reliable,
                stable, usable, secure, compatible, and maintainable.
                We use the most cost-effective testing tools and techniques.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Deployment and Post release support</h3>
              </header>
              <p>
                We provide DevOps as a managed service for businesses that
                run applications in the cloud. Our DevOps specialists ensure
                that your system runs efficiently, with ~99.998% uptime and
                rapid deployment of changes.
                We also offer post-release support services available for a
                period determined by you. Supporting and maintaining a product
                after launch makes it possible for you to constantly improve
                the product’s quality to meet the needs of end users
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Services
