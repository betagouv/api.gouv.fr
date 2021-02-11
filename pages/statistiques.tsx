import React from 'react';
import { GetStaticProps } from 'next';

import Page from '../layouts/page';
import { getAllAPIs, IApi } from '../model';
import Emoji from '../uiComponents/emoji';
import ChartAPIIsOpen from '../components/charts/chartAPIIsOpen';
import ChartAPIByProducers from '../components/charts/chartAPIByProducers';

interface IProps {
  allApis: IApi[];
}

const Stats: React.FC<IProps> = ({ allApis }) => {
  return (
    <Page
      title="Statistiques"
      description="Découvrez les chiffres clés du catalogue des APIs du service public"
      usePreFooter={false}
      noIndex={true}
    >
      <div className="text-wrapper text-style">
        <h1>
          Statistiques <Emoji emoji="🧮" label="mathématiques" />
        </h1>
        <h2>Évolution des API au catalogue api.gouv.fr.</h2>
        <p>Répartition des API en accès libre et en accès restreint :</p>
        <ChartAPIIsOpen allApis={allApis} />
        <p>Répartition des API par type de producteur de donnée :</p>
        <ChartAPIByProducers allApis={allApis} />
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allApis = await getAllAPIs();

  return {
    props: {
      allApis,
    },
  };
};

export default Stats;
