import React from 'react';

import Meta from '../components/meta';
import Page from '../layouts/page';
import { ButtonLink } from '../uiComponents';

const messages = {
  500: 'Une erreur s’est produite',
  404: "La page que vous avez demandé n'existe pas",
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
      <Page title="Page d’erreur">
        <Meta title={title} description={msg} />

        <section id="errorContainer" className="ui text container">
          <div>
            <h1>
              <span role="img" aria-label="emoji malade">
                🤕
              </span>
            </h1>
            <h2>{msg}</h2>
            <h3>
              Cela ne devrait pas arriver, mais si le problème persiste, vous
              pouvez <a href="mailto:contact@api.gouv.fr">nous contacter</a>.
            </h3>
            <ButtonLink href="/">
              Cliquez ici pour retourner à la page d’accueil
            </ButtonLink>
          </div>

          <style jsx>{`
            #errorContainer {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 75%;
              margin: 70px 0;
            }

            #errorContainer > div {
              display: flex;
              align-items: center;
              flex-direction: column;
              align-self: center;
            }

            h1,
            h2,
            h3 {
              text-align: center;
              margin: 10px auto 30px;
            }
            h1 {
              font-size: 6rem;
            }
            h2 {
              font-size: 1.8rem;
              line-height: 28px;
            }
            h3 {
              font-size: 1.3rem;
              color: #444;
            }
          `}</style>
        </section>
      </Page>
    );
  }
}

export default ErrorPage;
