import React from 'react';

import { Footer, PreFooter, Header, Meta } from '../components';
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
        background-color: #0058ff00;
        border-radius: 4px;
        transition: background-color 120ms ease-in-out;
        padding: 2px;
      }
      a:not(.dont-apply-link-style):hover {
        background-color: #0058ff14;
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Page;
