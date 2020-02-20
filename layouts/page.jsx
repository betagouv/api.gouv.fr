import React from 'react';

import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import PreFooter from '../components/preFooter';
import constants from '../const/index';
import '../styles/fonts.scss';
import './layout.scss';

const Page = props => (
  <div id="page-layout">
    <Meta title={props.title} description={props.description} />
    <Header headerKey={props.headerKey || 'home'} />
    <main>{props.children}</main>
    <PreFooter background={props.preFooterBackground} />
    <Footer />

    <style global jsx>{`
      #page-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        background-color: #fff;
      }

      #page-layout > main {
        flex: 1;
        margin-top: ${constants.HEADER_HEIGHT}px;
      }

      a {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Page;
