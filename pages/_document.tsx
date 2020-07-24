import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import constants from '../constants';
import { constant } from 'lodash';

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
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/open-sans-v17-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/open-sans-v17-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/source-sans-pro-v13-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/source-sans-pro-v13-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <style
            dangerouslySetInnerHTML={{
              __html: `
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

            /* open-sans-regular - latin */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/open-sans-v17-latin-regular.eot'); /* IE9 Compat Modes */
              src: local('Open Sans Regular'), local('OpenSans-Regular'),
                url('/fonts/open-sans-v17-latin-regular.eot?#iefix')
                  format('embedded-opentype'),
                /* IE6-IE8 */ url('/fonts/open-sans-v17-latin-regular.woff2')
                  format('woff2'),
                /* Super Modern Browsers */
                  url('/fonts/open-sans-v17-latin-regular.woff') format('woff'),
                /* Modern Browsers */
                  url('/fonts/open-sans-v17-latin-regular.ttf')
                  format('truetype'),
                /* Safari, Android, iOS */
                  url('/fonts/open-sans-v17-latin-regular.svg#OpenSans')
                  format('svg'); /* Legacy iOS */
            }
            /* open-sans-700 - latin */
            @font-face {
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/open-sans-v17-latin-700.eot'); /* IE9 Compat Modes */
              src: local('Open Sans Bold'), local('OpenSans-Bold'),
                url('/fonts/open-sans-v17-latin-700.eot?#iefix')
                  format('embedded-opentype'),
                /* IE6-IE8 */ url('/fonts/open-sans-v17-latin-700.woff2')
                  format('woff2'),
                /* Super Modern Browsers */
                  url('/fonts/open-sans-v17-latin-700.woff') format('woff'),
                /* Modern Browsers */ url('/fonts/open-sans-v17-latin-700.ttf')
                  format('truetype'),
                /* Safari, Android, iOS */
                  url('/fonts/open-sans-v17-latin-700.svg#OpenSans')
                  format('svg'); /* Legacy iOS */
            }

            /* source-sans-pro-regular - latin */
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/source-sans-pro-v13-latin-regular.eot');
              src: local('Source Sans Pro Regular'),
                local('SourceSansPro-Regular'),
                url('/fonts/source-sans-pro-v13-latin-regular.eot?#iefix')
                  format('embedded-opentype'),
                url('/fonts/source-sans-pro-v13-latin-regular.woff2')
                  format('woff2'),
                url('/fonts/source-sans-pro-v13-latin-regular.woff')
                  format('woff'),
                url('/fonts/source-sans-pro-v13-latin-regular.ttf')
                  format('truetype'),
                url('/fonts/source-sans-pro-v13-latin-regular.svg#SourceSansPro')
                  format('svg');
            }

            /* source-sans-pro-700 - latin */
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/source-sans-pro-v13-latin-700.eot');
              src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
                url('/fonts/source-sans-pro-v13-latin-700.eot?#iefix')
                  format('embedded-opentype'),
                url('/fonts/source-sans-pro-v13-latin-700.woff2')
                  format('woff2'),
                url('/fonts/source-sans-pro-v13-latin-700.woff') format('woff'),
                url('/fonts/source-sans-pro-v13-latin-700.ttf')
                  format('truetype'),
                url('/fonts/source-sans-pro-v13-latin-700.svg#SourceSansPro');
            }

            html,
            body {
              font-size: 16px;
              line-height: 24px;
              color: rgba(0, 0, 0, 0.78);
            }

            html,
            body,
            div,
            p,
            span,
            a {
              font-family: 'Source Sans Pro', sans-serif;
            }

            h1,
            h2,
            h3,
            h4 {
              font-family: 'Open Sans', sans-serif;
            }
`,
            }}
          />
        </Head>

        <body>
          <Main />
          {process.env.NODE_ENV === 'production' && (
            <>
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
              <script
                src="https://cdn.ravenjs.com/3.19.1/raven.min.js"
                crossOrigin="anonymous"
              ></script>
              <script
                defer
                async
                dangerouslySetInnerHTML={{
                  __html: `
            <!-- Init Sentry -->
            Raven.config(
              ${constants.links.SENTRY.URL}
            ).install();
          `,
                }}
              ></script>
            </>
          )}
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
