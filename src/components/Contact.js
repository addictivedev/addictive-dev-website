import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section className="grid-wrapper">
        <section className="col-6">
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:info@pitchtarget.com">info@pitchtarget.com</a>
          </div>
        </section>
        <section className="col-6">
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <span>+390422789611</span>
          </div>
        </section>
        <section className="col-6">
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
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
            <span className="icon alt fa-shopping-cart" />
            <h3>Vat</h3>
            <span>
              IT04636600266
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
