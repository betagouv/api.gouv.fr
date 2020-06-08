import React from 'react';

import Page from '../layouts/page';
import { HEADER_PAGE } from '../components';

const teamData = [
  {
    name: 'Romain Tales',
    title: 'Chef du pôle API',
    linkedin: 'https://www.linkedin.com/in/romain-tales-5969737',
    img: 'Romain.jpg',
  },
  {
    name: 'Patrick Amarelis',
    title: 'Référent administration, ministères & collectivités',
    linkedin: 'https://www.linkedin.com/in/patrick-amarelis-8853205/',
    img: 'Patrick.jpg',
  },
  {
    name: 'Xavier Jouppe',
    title: 'Responsable produit - api.gouv.fr',
    linkedin: 'https://www.linkedin.com/in/xavier-jouppe-a9030579/',
    img: 'Xavier.jpg',
  },
  {
    name: 'Stanislas Bernard',
    title: 'Responsable produit - API Particulier',
    linkedin: 'https://www.linkedin.com/in/stanislas-bernard-3b14b586/',
    img: 'Stanislas.jpg',
  },
  {
    name: 'Vincent Mazalaigue',
    title: 'Responsable produit - API Entreprise',
    linkedin: 'https://www.linkedin.com/in/vmazalaigue/',
    img: 'Vincent.jpg',
  },
  {
    name: 'Amandine Audras',
    title: 'Designeuse produit',
    linkedin: 'https://www.linkedin.com/in/amandineaudras/',
    img: 'Amandine.jpg',
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
          <div className="medaillon" key={teamate.name}>
            <div>
              <img src={`/images/equipe/${teamate.img}`} alt="" />
            </div>
            <h4>
              {teamate.name}{' '}
              <a
                className="linkedin dont-apply-link-style"
                href={teamate.linkedin}
                rel="noopener noreferrer"
                target="_blank"
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
        margin: 25px 15px 10px;
      }
      .medaillon img {
        background-color: #eee;
        border-radius: 25px;
        width: 120px;
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
        background-color: #6c6c6c;
        text-decoration: none;
        font-weight: bold;
        padding: 1px 4px;
        color: #fff;
      }
      .medaillon .linkedin:hover {
        background-color: #0e76a8;
      }
    `}</style>
  </Page>
);

export default Team;
