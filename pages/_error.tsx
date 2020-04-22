import React from 'react';

import { Error } from '../components';
import Page from '../layouts/page';

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
    code: undefined,
    message: null,
  };

  static getStaticProps({ res, err }: any) {
    const code = res ? res.statusCode : err ? err.statusCode : null;

    return { code };
  }

  render() {
    const { code, message } = this.props;
    const title = `Erreur ${code}`;
    const msg = message || messages[code];

    return (
      <Page title="Page d’erreur">
        <Error title={title} msg={msg} />
      </Page>
    );
  }
}

export default ErrorPage;
