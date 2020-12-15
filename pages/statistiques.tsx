import React from 'react';
import { GetStaticProps } from 'next';

import Page from '../layouts/page';
import { getAllAPIs, IApi } from '../model';
import Emoji from '../uiComponents/emoji';
import StackedChart from '../components/charts/stackedBarChart';

interface IProps {
  allApis: IApi[];
}

const Stats: React.FC<IProps> = ({ allApis }) => {
  return (
    <Page
      title="Statistiques"
      description="Découvrez les statistiques des APIs du service public"
      usePreFooter={false}
      noIndex={true}
    >
      <div className="text-wrapper text-style">
        <h1>
          Statistiques <Emoji emoji="🧮" label="mathématiques" />
        </h1>
        <h2>Évolution des API au catalogue api.gouv.fr.</h2>
        <p>
          Cliquez sur une colonne graphique pour découvrir le détail des APIs
          ajoutée(s), mois par mois :
        </p>
        <StackedChart allApis={allApis} />
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
