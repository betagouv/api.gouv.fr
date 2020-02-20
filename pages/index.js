import React from 'react';
import getConfig from 'next/config';

import withErrors from '../components/hoc/with-errors';

import { getAllAPIs } from '../utils/api';

import Page from '../layouts/page';

import UseCaseSection from '../components/home/useCaseSection';
import ApiTripletSection from '../components/home/apiTripletSection';
import Baseline from '../components/home/baseline';

const { publicRuntimeConfig } = getConfig();
const SITE_DESCRIPTION =
  publicRuntimeConfig.SITE_DESCRIPTION ||
  'Simplifiez le partage et la circulation des données administratives';

const Home = ({ q, filter, apiList }) => (
  <Page>
    <Baseline />
    <ApiTripletSection apiList={apiList} />
    <div className="layout-center">
      <h2>Ils ont créé de nouveaux services innovants avec des APIs :</h2>
    </div>
    <UseCaseSection />

    <style jsx>{`
      h2 {
        margin: 100px 0 0;
      }
    `}</style>
  </Page>
);

Home.getInitialProps = async req => {
  const { q, filter } = req.query;
  const apiList = await getAllAPIs();

  return {
    q,
    filter,
    apiList,
  };
};

export default withErrors(Home);
