import React from 'react';
import withErrors from '../components/hoc/with-errors';

import { getAllAPIs } from '../model/api';

import Page from '../layouts/page';

import {
  UseCaseSection,
  ApiTripletSection,
  ExplanationSection,
  Baseline,
} from '../components/home';

const Home = ({ apiList }) => (
  <Page
    title="Api.gouv.fr"
    description="Simplifiez le partage et la circulation des données administratives grace à api.gouv, le site qui référence toutes les APIs du service public."
  >
    <Baseline />
    <ExplanationSection />
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
    apiList: apiList,
  };
};

export default withErrors(Home);
