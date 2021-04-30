import React from 'react';
import { GetStaticProps } from 'next';

import Page from '../layouts/page';
import { Roadmap } from '../components/roadmap';
import { getRoadmap, IRoadmapElement } from '../model';
import Emoji from '../uiComponents/emoji';
import constants from '../constants';

const Social = () => (
  <>
    <p>
      Pour suivre notre actualité, être au courant des nouvelles publications
      d’API et des webinaires à venir, abonnez-vous à notre page linkedin ou
      suivez notre compte twitter :
    </p>
    <div className="layout-center icons">
      <Emoji label="par ici" emoji="👉" />
      <a href="https://twitter.com/apigouv" title="Twitter">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill={constants.colors.blue}
        >
          <path d="M32,7.075c-1.175,0.525 -2.444,0.875 -3.769,1.031c1.356,-0.813 2.394,-2.1 2.887,-3.631c-1.269,0.75 -2.675,1.3 -4.169,1.594c-1.2,-1.275 -2.906,-2.069 -4.794,-2.069c-3.625,0 -6.563,2.938 -6.563,6.563c0,0.512 0.056,1.012 0.169,1.494c-5.456,-0.275 -10.294,-2.888 -13.531,-6.862c-0.563,0.969 -0.887,2.1 -0.887,3.3c0,2.275 1.156,4.287 2.919,5.463c-1.075,-0.031 -2.087,-0.331 -2.975,-0.819c0,0.025 0,0.056 0,0.081c0,3.181 2.263,5.838 5.269,6.437c-0.55,0.15 -1.131,0.231 -1.731,0.231c-0.425,0 -0.831,-0.044 -1.237,-0.119c0.838,2.606 3.263,4.506 6.131,4.563c-2.25,1.762 -5.075,2.813 -8.156,2.813c-0.531,0 -1.05,-0.031 -1.569,-0.094c2.913,1.869 6.362,2.95 10.069,2.95c12.075,0 18.681,-10.006 18.681,-18.681c0,-0.287 -0.006,-0.569 -0.019,-0.85c1.281,-0.919 2.394,-2.075 3.275,-3.394l0,-0.001Z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/api-gouv-fr/" title="Linkedin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 22 22"
          fill={constants.colors.blue}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <Emoji label="par là" emoji="👈" />
    </div>
    <style global jsx>{`
      .icons > a {
        width: 30px;
        height: 30px;
        margin: 0 15px;
      }

      .icons {
        margin-bottom: 40px;
      }
    `}</style>
  </>
);
interface IProps {
  roadmap: IRoadmapElement[];
}

const FeuilleDeRoute: React.FC<IProps> = ({ roadmap }) => {
  return (
    <Page
      title="Feuille de route"
      description="Découvrez les API récemment ajouté et celles qui sont en cours d'intégration au catalogue des API"
    >
      <div className="text-wrapper text-style">
        <h1>
          La feuille de route des API <Emoji emoji="🏗" label="travaux" />
        </h1>
        <p>
          Depuis 2016, nous référençons les API de toutes les administrations
          qui ouvrent leur données
        </p>
        <Social />
        <Roadmap roadmap={roadmap} />
        <Social />
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
