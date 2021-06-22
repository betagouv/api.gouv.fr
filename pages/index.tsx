import React from 'react';
import { GetStaticProps } from 'next';
import { shuffle } from 'lodash';

import { getAllAPIs, IApi } from '../model';
import Page from '../layouts/page';

import {
  UseCaseSection,
  ApiTripletSection,
  ExplanationSection,
  Baseline,
  DLNUFSection,
} from '../components/home';

interface IProps {
  apis: IApi[];
}

const Home: React.FC<IProps> = ({ apis }) => (
  <Page
    title="Api.gouv.fr"
    canonical={`https://api.gouv.fr`}
    description="Simplifiez le partage et la circulation des données administratives grace à api.gouv, le site qui référence toutes les API du service public."
  >
    <Baseline />
    <ExplanationSection />
    <ApiTripletSection apiList={apis} />
    <div className="fr-container layout-center">
      <h2>Ils ont créé de nouveaux services innovants avec des API&nbsp;:</h2>
    </div>
    <UseCaseSection />
    <DLNUFSection />

    <style jsx>{`
      h2 {
        margin: 100px 0 0;
      }
    `}</style>
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  const apiList = await getAllAPIs();

  const mostInterestingApis = apiList
    .sort((a, b) => ((a.visits_2019 || 0) > (b.visits_2019 || 0) ? -1 : 1))
    .slice(0, 15);

  const refreshList = () => {
    return {
      apis: shuffle(mostInterestingApis).slice(0, 3),
    };
  };

  return {
    props: refreshList(),
  };
};

export default Home;
