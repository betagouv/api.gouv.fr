import React from 'react';

import { Error } from '../components';
import Page from '../layouts/page';

const msg = 'La page que vous avez demandé n’existe pas';

export default () => (
  <Page title="Page d’erreur">
    <Error msg={msg} title="Error 404" />
  </Page>
);
