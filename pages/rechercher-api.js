import React from 'react';

import withErrors from '../components/hoc/with-errors';
import { getAllAPIs } from '../model/api';
import Page from '../layouts/page';
import SearchApis from '../components/searchApis';
import { HEADER_PAGE } from '../components';
import { flatten, uniq } from 'lodash';
import constants from '../constants';

const RechercherApi = ({ allApis, allThemes, filter = '' }) => {
  const fromSignup = filter.toLowerCase() === 'signup';
  return (
    <Page
      headerKey={fromSignup ? HEADER_PAGE.FROM_SIGNUP : HEADER_PAGE.APIS}
      preFooterBackground={constants.colors.white}
      title="Rechercher une API du service public"
      description="Vous faites partie d'un ministère ou d'une collectivité et vous cherchez une API du service public ? Vous êtes au bon endroit."
    >
      <section className="content-container page-baseline">
        <h2>
          Vous recherchez une API du service public ? Vous êtes au bon endroit !
        </h2>
      </section>

      <SearchApis
        allApis={allApis}
        allThemes={allThemes}
        searchFromQueryString={filter}
      />
    </Page>
  );
};

RechercherApi.getInitialProps = async req => {
  const { q, filter } = req.query;
  const allApis = await getAllAPIs();

  const allThemes = uniq(flatten(allApis.map(api => api.themes))).sort();
  return {
    q,
    filter,
    allApis,
    allThemes,
  };
};

export default withErrors(RechercherApi);
