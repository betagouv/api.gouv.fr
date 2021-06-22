import React from 'react';
import { GetStaticProps } from 'next';

import Page from '../layouts/page';
import { getAllAPIs, IApi } from '../model';
import Emoji from '../uiComponents/emoji';
import ChartAPIIsOpen from '../components/charts/chartAPIIsOpen';
import ChartAPIByProducers from '../components/charts/chartAPIByProducers';
import MatomoStatsTable from '../components/matomoStats';
import { H2WithAnchor } from '../uiComponents/titleWithAnchor';

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
        <H2WithAnchor>Évolution des API au catalogue api.gouv.fr.</H2WithAnchor>
        <p>Répartition des API en accès libre et en accès restreint :</p>
        <ChartAPIIsOpen allApis={allApis} />
        <p>Répartition des API par type de producteur de donnée :</p>
        <ChartAPIByProducers allApis={allApis} />
        <H2WithAnchor>Retours utilisateurs</H2WithAnchor>
        <p>
          Réponses des visiteurs à la question "Est-ce que cette page vous a été
          utile ?", sur les douze derniers mois :
        </p>
        <MatomoStatsTable />
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
