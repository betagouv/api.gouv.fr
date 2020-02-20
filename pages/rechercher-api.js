import React from 'react';

import withErrors from '../components/hoc/with-errors';
import { getAllAPIs } from '../utils/api';
import Page from '../layouts/page';
import SearchApis from '../components/searchApis';
import { HEADER_PAGE } from '../components/header';

const RechercherApi = ({ allApis }) => {
  const allThemes = [
    ...allApis.reduce((themeSet, api) => {
      if (api.themes) {
        api.themes.forEach(theme => themeSet.add(theme));
      }
      return themeSet;
    }, new Set()),
  ].sort();

  return (
    <Page headerKey={HEADER_PAGE.APIS}>
      <section id="rechercher-api-baseline" className="content-container">
        <h2>
          Vous recherchez une API du service public ? Vous êtes au bon endroit !
        </h2>
      </section>

      <SearchApis allApis={allApis} allThemes={allThemes} />

      <style jsx>{`
        #rechercher-api-baseline {
          margin: 30px 0;
          text-align: left;
        }
      `}</style>
    </Page>
  );
};

RechercherApi.getInitialProps = async req => {
  const { q, filter } = req.query;
  const allApis = await getAllAPIs();

  return {
    q,
    filter,
    allApis,
  };
};

export default withErrors(RechercherApi);
