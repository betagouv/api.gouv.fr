import React from 'react';
import { flatten, uniq } from 'lodash';
import { NextPage } from 'next';

import withErrors from '../components/hoc/with-errors';
import { getAllAPIs, IApi } from '../model';
import Page from '../layouts/page';
import SearchApis from '../components/searchApis';
import { HEADER_PAGE } from '../components';
import constants from '../constants';

interface IProps {
  allApis: IApi[];
  allThemes: string[];
  filter: string | string[];
}

const RechercherApi: NextPage<IProps> = ({ allApis, allThemes, filter }) => {
  //@ts-ignore
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
        //@ts-ignore
        searchFromQueryString={filter}
      />
    </Page>
  );
};

RechercherApi.getInitialProps = async req => {
  const { filter = '' } = req.query;
  const allApis = await getAllAPIs();

  const allThemes = uniq(
    flatten(
      allApis.map(api => {
        // this must be tested with JEST first, but one never knows
        if (!api.themes) {
          throw new Error(`API must have at least one theme : ${api.slug}`);
        }
        return api.themes;
      })
    )
  ).sort();

  return {
    filter,
    allApis,
    allThemes,
  };
};

export default withErrors(RechercherApi);
