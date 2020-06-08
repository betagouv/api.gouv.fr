import React from 'react';

import Page from '../layouts/page';
import { HEADER_PAGE } from '../components';

const teamData = [
  {
    name: 'Romain Tales',
    title: 'Chef du pôle API',
    linkedin: 'https://www.linkedin.com/in/romain-tales-5969737',
  },
  {
    name: 'Patrick Amarelis',
    title: 'Référent administration, ministères & collectivités',
    linkedin: 'https://www.linkedin.com/in/romain-tales-5969737',
  },
  {
    name: 'Xavier Jouppe',
    title: 'Responsable produit - api.gouv.fr',
    linkedin: 'https://www.linkedin.com/in/xavier-jouppe-a9030579/',
  },
  {
    name: 'Stanislas Bernard',
    title: 'Responsable produit - API Particulier',
    linkedin: 'https://www.linkedin.com/in/stanislas-bernard-3b14b586/',
  },
  {
    name: 'Vincent Mazalaigue',
    title: 'Responsable produit - API Entreprise',
    linkedin: 'https://www.linkedin.com/in/vmazalaigue/',
  },
];

const Team: React.FC = () => (
  <Page
    headerKey={HEADER_PAGE.ABOUT}
    title="L'équipe"
    description="L'équipe derrière le site, à votre disposition pour construire les services numériques de demain"
    canonical={`https://api.gouv.fr/apropos`}
  >
    <div className="text-wrapper text-style">
      <h1 className="layout-center">L’équipe des APIs</h1>
      <h2>Une équipe, une mission</h2>
      <p>
        Au sein des administrations, la donnée est une ressource dispersée,
        hétérogène et difficile d'accès. Les organisations qui construisent des
        services numériques pour les citoyens ou les agents de la fonction
        publique ont besoin de cette donnée et doivent faire face à :
      </p>
      <ul>
        <li>la multiplicité des sources de données et des interlocuteurs</li>
        <li>
          la difficulté d’identifier la source de donnée adaptée à leur service
        </li>
        <li>la réticence des fournisseurs d’API à ouvrir certaines données</li>
        <li>la difficulté d’obtenir l'accès à la donnée</li>
        <li>la difficulté de construire un service fiable avec la donnée</li>
      </ul>
      <p>
        api.gouv.fr fait le lien entre tous les acteurs de la donnée pour{' '}
        <b>construire ensemble les services numériques de demain.</b>
      </p>
      <h3>Nos objectifs</h3>
      <ul>
        <li>
          <b>recenser</b> les apis existantes
        </li>
        <li>
          <b>conseiller</b> et accompagner les constructeurs de services
          numériques
        </li>
        <li>
          <b>faciliter</b> et numériser les procédures d'habilitation pour
          accèder à la donnée
        </li>
        <li>
          <b>rassurer</b> et établir une relation de confiance entre les
          constructeurs de services informatiques et l'administration
          responsable de la donnée
        </li>
      </ul>
      <h3>Nos forces vives</h3>
      <div className="default-grid">
        {teamData.map(teamate => (
          <div className="medaillon">
            <div>
              <img src="/images/equipe/default_boy.png" alt="" />
            </div>
            <h4>
              {teamate.name}{' '}
              <a
                className="linkedin dont-apply-link-style"
                href={teamate.linkedin}
              >
                in
              </a>
            </h4>
            <div className="title">{teamate.title}</div>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .medaillon {
        text-align: center;
      }
      .medaillon img {
        background-color: #eee;
        border-radius: 30px;
        width: 150px;
        margin: 15px 20px 10px;
      }
      .medaillon h4 {
        margin: 5px 0;
      }
      .medaillon .title {
        font-size: 0.9rem;
      }
      .medaillon .linkedin {
        margin-left: 5px;
        border-radius: 4px;
        background-color: #ccc;
        text-decoration: none;
        font-weight: bold;
        padding: 2px 3px;
        color: #fff;
      }
      .medaillon .linkedin:hover {
        background-color: #0e76a8;
      }
    `}</style>
  </Page>
);

export default Team;
