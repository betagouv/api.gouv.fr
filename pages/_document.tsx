import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          {/* Standard Meta */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
          <link
            rel="shortcut icon"
            href="/favicons/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="manifest"
            href="/favicons/manifest.webmanifest"
            crossOrigin="use-credentials"
          />
          <link rel="stylesheet" href="/css/dsfr.min.css"></link>
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
`,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' &&
            process.env.PIWIK_URL &&
            process.env.PIWIK_SITE_ID && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            <!-- Piwik -->
            var _paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="${process.env.PIWIK_URL}";
              _paq.push(['setTrackerUrl', u+'piwik.php']);
              _paq.push(['setSiteId', ${process.env.PIWIK_SITE_ID}]);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
            })();
            `,
                }}
              />
            )}
          {/* last, we call sentry as we want to load it synchronously. It has to be executed BEFORE the other deferred scripts */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src="https://cdn.ravenjs.com/3.19.1/raven.min.js"
                crossOrigin="anonymous"
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  <!-- Init Sentry -->
                  Raven.config('${process.env.SENTRY_URL}').install()
                  `,
                }}
              ></script>
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
