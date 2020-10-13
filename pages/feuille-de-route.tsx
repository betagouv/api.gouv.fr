import React from 'react';
import { GetStaticProps } from 'next';

import Page from '../layouts/page';
import { Roadmap } from '../components/roadmap';
import { getRoadmap, IRoadmapElement } from '../model';
import Emoji from '../uiComponents/emoji';

interface IProps {
  roadmap: IRoadmapElement[];
}

const FeuilleDeRoute: React.FC<IProps> = ({ roadmap }) => {
  return (
    <Page
      title="Feuille de route"
      description="Découvrez les APIs récemment ajouté et celles qui sont en cours d'intégration au catalogue des APIs"
    >
      <div className="text-wrapper text-style">
        <h1>
          La feuille de route des APIs <Emoji emoji="🏗" label="travaux" />
        </h1>
        <p>
          Depuis 2016, nous référençons les APIs de toutes les administrations
          qui ouvrent leur données
        </p>
        <Roadmap roadmap={roadmap} />
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const roadmap = await getRoadmap();

  return {
    props: {
      roadmap,
    },
  };
};

export default FeuilleDeRoute;
