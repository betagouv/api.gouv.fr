import React from 'react';
import withErrors from '../components/hoc/with-errors';

import { getAllAPIs } from '../utils/api';

import Page from '../layouts/page';

import UseCaseSection from '../components/home/useCaseSection';
import ApiTripletSection from '../components/home/apiTripletSection';
import Baseline from '../components/home/baseline';

const Home = ({ apiList }) => (
  <Page title="Api.gouv.fr : le site qui référence toutes les APIs du service public">
    <Baseline />
    <ApiTripletSection apiList={apiList} />
    <div className="content-container layout-center">
      <h2>Ils ont créé de nouveaux services innovants avec des APIs&nbsp;:</h2>
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
  const apiList = await getAllAPIs();

  return {
    apiList,
  };
};

export default withErrors(Home);
