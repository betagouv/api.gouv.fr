import React from 'react';
import App from 'next/app';

import '../layouts/pageStyles.scss';
import '../layouts/imports.scss';

import 'swagger-ui-dist/swagger-ui.css';

class MyApp extends App {
  logPageView() {
    //@ts-ignore
    if (typeof window !== 'undefined' && window.Piwik) {
      //@ts-ignore
      const tracker = window.Piwik.getTracker(
        `${process.env.PIWIK_URL}/piwik.php`,
        process.env.PIWIK_SITE_ID
      );

      if (tracker) {
        tracker.trackPageView();
      }
    }
  }

  componentDidMount() {
    this.logPageView();
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.logPageView();
    }, 400);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        {/* eslint-disable-next-line */}
        <script type="module" src="/js/dsfr.module.min.js"></script>
        {/* eslint-disable-next-line */}
        <script
          type="text/javascript"
          noModule
          src="/js/dsfr.nomodule.min.js"
        ></script>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
