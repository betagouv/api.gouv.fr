import React from 'react';
import App from 'next/app';

import '../layouts/fonts.scss';
import '../layouts/pageStyles.scss';
import '../layouts/imports.scss';

import Chat from '../components/chat';

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
