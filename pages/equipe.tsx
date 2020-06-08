import React from 'react';

import Page from '../layouts/page';
import { HEADER_PAGE } from '../components';
import constants from '../constants';

const teamData = [
  {
    name: 'Romain Tales',
    title: 'Chef de mission DATA',
    linkedin: 'https://www.linkedin.com/in/romain-tales-5969737',
    img: 'Romain.jpg',
  },
  {
    name: 'Patrick Amarelis',
    title: 'Responsable administrations, ministères & collectivités',
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
  {
    name: 'Raphaël Dubigny',
    title: 'Responsable produit - Signup',
    linkedin: 'https://www.linkedin.com/in/rapha%C3%ABl-dubigny-a085034a/',
    img: 'Raph.jpg',
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
      <h1 className="layout-center">L’équipe des APIs </h1>
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
          la difficulté d’identifier la bonne source de donnée, adaptée à leur
          service
        </li>
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
          <b>conseiller</b> les administrations qui construisent des services
          numériques
        </li>
        <li>
          <b>faciliter</b> et dématérialiser l’accès aux données entre
          administrations habilitées
        </li>
        <li>
          <b>rassurer</b> et établir une relation de confiance entre les
          administrations qui construisent des services numériques et celles qui
          mettent à disposition leurs données
        </li>
      </ul>
      <h3>Nos forces vives</h3>
      <div className="default-grid">
        {teamData.map(teamate => (
          <a
            href={teamate.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            className="dont-apply-link-style medaillon"
            key={teamate.name}
          >
            <div>
              <img src={`/images/equipe/${teamate.img}`} alt="" />
            </div>
            <h4>
              {teamate.name} <span className="linkedin">in</span>
            </h4>
            <div className="title">{teamate.title}</div>
          </a>
        ))}
      </div>
    </div>
    <style jsx>{`
      .medaillon {
        display: block;
        text-align: center;
        margin: 25px 15px 10px;
        color: ${constants.colors.darkestGrey};
        text-decoration: none;
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
        font-weight: bold;
        padding: 1px 4px;
        color: #fff;
      }
      .medaillon:hover .linkedin {
        background-color: #0e76a8;
      }
    `}</style>
  </Page>
);

export default Team;
