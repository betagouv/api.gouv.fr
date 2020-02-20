import React from 'react';
import App from 'next/app';
import getConfig from 'next/config';

import Chat from '../components/chat';

const {
  publicRuntimeConfig: { PIWIK_URL, PIWIK_SITE_ID },
} = getConfig();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  logPageView() {
    if (window.Piwik) {
      const tracker = window.Piwik.getTracker(
        `${PIWIK_URL}/piwik.php`,
        PIWIK_SITE_ID
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
        <Component {...pageProps} />
        <Chat />
        <style jsx>{`
          @media (max-width: 30em) {
            .medium.screen.only {
              display: none !important;
            }
          }

          .swagger-ui .topbar {
            display: none;
          }

          .ui.text.container {
            padding-top: 4em;
            padding-bottom: 4em;
          }

          /* Override SemanticUI default for improved a11y - contrast 4.5 */
          a {
            color: #3a73c0;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
