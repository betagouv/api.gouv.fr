import React from 'react';
import Link from 'next/link';

import Meta from '../components/meta';
import Page from '../layouts/page';

const messages = {
  500: 'Une erreur imprévue s’est produite',
  404: "Cette page n'existe pas",
};

interface IProps {
  code: 500 | 404;
  message?: string;
}

class ErrorPage extends React.Component<IProps> {
  static defaultProps = {
    code: 500,
    message: null,
  };

  static getInitialProps({ res, err }: any) {
    const code = res ? res.statusCode : err ? err.statusCode : null;

    return { code };
  }

  render() {
    const { code, message } = this.props;
    const title = `Erreur ${code}`;
    const msg = message || messages[code];

    return (
      <Page title="Une erreur est survenue">
        <Meta title={title} description={msg} />

        <section id="errorContainer" className="ui text container">
          <div>
            <h1>
              <span role="img" aria-label="emoji malade">
                🤕
              </span>
            </h1>
            <h2>{msg}</h2>
            <div className="back-home">
              <Link href="/">
                <a className="ui button">Retour à la page d’accueil</a>
              </Link>
            </div>
          </div>

          <style jsx>{`
            #errorContainer {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 75%;
            }

            #errorContainer > div {
              display: flex;
              align-items: center;
              flex-direction: column;
              align-self: center;
            }

            h1,
            h2 {
              text-align: center;
              font-size: 200%;
              line-height: 1.8;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              margin: 0;
            }

            .back-home {
              display: flex;
              justify-content: center;
              width: 80%;
              border-top: 0.5em #3d4a99 solid;
              padding-top: 2em;
            }

            .ui .button {
              background-color: #3d4a99;
              color: white;
              text-align: center;
              margin: auto;
            }
          `}</style>
        </section>
      </Page>
    );
  }
}

export default ErrorPage;
