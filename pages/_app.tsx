import React from 'react';
import App from 'next/app';

import '../layouts/pageStyles.scss';
import '../layouts/imports.scss';
import '../layouts/fonts.scss';

import 'swagger-ui-dist/swagger-ui.css';

import Chat from '../components/chat';

import constants from '../constants';

class MyApp extends App {
  logPageView() {
    //@ts-ignore
    if (typeof window !== 'undefined' && window.Piwik) {
      //@ts-ignore
      const tracker = window.Piwik.getTracker(
        `${constants.links.PIWIK.URL}/piwik.php`,
        constants.links.PIWIK.SITE_ID
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
      </>
    );
  }
}

export default MyApp;
