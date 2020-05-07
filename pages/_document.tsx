import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import constants from '../constants';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="fr">
        <Head>
          {/* Standard Meta */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />

          <link rel="icon" href="/favicon.ico" />

          <link
            rel="stylesheet"
            type="text/css"
            href="//cdn.jsdelivr.net/gh/swagger-api/swagger-ui@v3.4.0/dist/swagger-ui.css"
          ></link>

          <style jsx>{`
            html {
              height: 100%;
            }

            body {
              height: 100%;
              margin: 0;
            }

            #__next {
              height: 100%;
              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
            }
          `}</style>
        </Head>

        <body>
          <Main />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Array.prototype.includes,modernizr:es6string,modernizr:es6array,Promise,fetch" />
          {process.env.NODE_ENV === 'production' && (
            <script
              defer
              async
              dangerouslySetInnerHTML={{
                __html: `
            <!-- Piwik -->
            var _paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="${constants.links.PIWIK.URL}";
              _paq.push(['setTrackerUrl', u+'piwik.php']);
              _paq.push(['setSiteId', ${constants.links.PIWIK.SITE_ID}]);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
              }}
            />
          )}
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
