import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import pic_abp from '../assets/images/pic-abp.jpg'
import pic_li from '../assets/images/pic-li.jpg'
import pic_ls from '../assets/images/pic-ls.jpg'
import pic_bt from '../assets/images/pic-bt.jpg'

const pageName = "use-cases";

const UseCases = ({intl}) => (
  <Layout name={pageName}>
    <SEO title="Use cases" description={"Collection of development projects"} />
    <BannerLanding page="useCases" styles="use-cases style3"/>

    <div id="main">
      <section className="spotlights">
        <section id="automaticboostpost">
          <Link to={`/use-cases/automatic-boost-post`} className="image">
            <img src={pic_abp} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3><FormattedMessage id='pages.useCases.abp_title' /></h3>
                <h6><small className="labels"><FormattedMessage id='pages.useCases.abp_labels' /></small></h6>
              </header>
              <p>
                <FormattedMessage id='pages.useCases.abp_desc' />
              </p>
              <ul className="actions">
                <li>
                  <Link to={`/use-cases/automatic-boost-post`} className="button">
                    <FormattedMessage id='pages.useCases.abp_cta' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="localimpact">
          <Link to={`/${pageName}#footer`} className="image">
            <img src={pic_li} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3><FormattedMessage id='pages.useCases.li_title' /></h3>
                <h6><small className="labels"><FormattedMessage id='pages.useCases.li_labels' /></small></h6>
              </header>
              <p>
                <FormattedMessage id='pages.useCases.li_desc' />
              </p>
              <ul className="actions">
                <li>
                  <a href="https://localimpact.it" target="_blank" rel="noopener noreferrer" className="button">
                    <FormattedMessage id='pages.useCases.li_cta' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="leadsync">
          <Link to={`/${pageName}#footer`} className="image">
            <img src={pic_ls} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3><FormattedMessage id='pages.useCases.ls_title' /></h3>
                <h6><small className="labels"><FormattedMessage id='pages.useCases.ls_labels' /></small></h6>
              </header>
              <p>
                <FormattedMessage id='pages.useCases.ls_desc' />
              </p>
            </div>
          </div>
        </section>
        <section id="betania">
          <Link to={'/use-cases/betania'} className="image">
            <img src={pic_bt} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3><FormattedMessage id='pages.useCases.bt_title' /></h3>
                <h6><small className="labels"><FormattedMessage id='pages.useCases.bt_labels' /></small></h6>
              </header>
              <p>
                <FormattedMessage id='pages.useCases.bt_desc' />
              </p>
              <ul className="actions">
                <li>
                  <Link to={'/use-cases/betania'} className="button">
                    <FormattedMessage id='pages.useCases.bt_cta' />
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

// <section id="feedstock">
//   <Link to={`/${pageName}#footer`} className="image">
//     <img src={pic_fs} alt="" />
//   </Link>
//   <div className="content">
//     <div className="inner">
//       <header className="major">
//         <h3><FormattedMessage id='pages.useCases.fs_title' /></h3>
//         <h6><small className="labels"><FormattedMessage id='pages.useCases.fs_labels' /></small></h6>
//       </header>
//       <p>
//         <FormattedMessage id='pages.useCases.fs_desc' />
//       </p>
//       <ul className="actions">
//         <li>
//           <a href="https://feedstock.com" target="_blank" rel="noopener noreferrer" className="button">
//             <FormattedMessage id='pages.useCases.fs_cta' />
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </section>

export default injectIntl(UseCases);
