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

const ErrorPage: React.FC<IProps> = ({ code, message }) => {
  return (
    <Page title="Page d’erreur">
      <Error title={`Erreur ${code}`} msg={message || messages[code]} />
    </Page>
  );
};

export default ErrorPage;
