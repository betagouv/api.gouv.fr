import React from 'react';

import Page from '../layouts/page';
import constants from '../constants';

const teamData = [
  {
    name: 'Vincent Mazalaigue',
    title: 'Responsable circulation de la donnée',
    linkedin: 'https://www.linkedin.com/in/vmazalaigue/',
    img: 'Vincent.jpg',
  },
  {
    name: 'Alexis Leclerc',
    title: 'Leaddev',
    linkedin: 'https://www.linkedin.com/in/leclerca/',
    img: 'Alexis.jpg',
  },
  {
    name: 'Anais Tailhade',
    title: 'Chargée de coordination du pôle',
    linkedin: 'https://www.linkedin.com/in/anais-tailhade-596b95225/',
    img: 'Anais.jpg',
  },
  {
    name: 'Samuel Faure',
    title: 'Dev API Entreprise & API Particulier',
    linkedin: 'https://fr.linkedin.com/in/samuel-faure-0a118780',
    img: 'Samuel.jpg',
  },
  {
    name: 'Loïc Delmaire',
    title: 'Dev API Entreprise & API Particulier',
    linkedin:
      'https://www.linkedin.com/in/%F0%9F%90%A4-lo%C3%AFc-delmaire-%F0%9F%90%A4-46813649/',
    img: 'Loic.jpg',
  },
  {
    name: 'Thomas Comes',
    title: 'Dev API Entreprise & API Particulier',
    linkedin:
      'https://www.linkedin.com/in/thomas-comes-43b19850/',
    img: 'Thomas.jpg',
  },
  {
    name: 'Dorine Lambinet',
    title: 'Designeuse produit API',
    linkedin: 'https://www.linkedin.com/in/dorine-lambinet-99534b117/',
    img: 'Dorine.jpg',
  },
    {
    name: 'Charlotte Choplin',
    title: 'Bizdev API entreprise',
    linkedin: 'https://www.linkedin.com/in/charlotte-choplin-coaching-consulting-0943bb83/',
    img: 'Charlotte.jpg',
  },
  {
    name: 'Nicolas Schweisguth',
    title: 'PO DataPass',
    linkedin: 'https://www.linkedin.com/in/nicolas-schweisguth-a374744b/',
    img: 'Nicolas.jpg',
  },
  {
    name: 'Isabelle Lafont',
    title: 'Dev DataPass',
    linkedin: 'https://www.linkedin.com/in/isabelle-lafont/',
    img: 'Isabelle.jpg',
  },
  {
    name: 'Pierre-Eric Garcia',
    title: 'Dev DataPass',
    linkedin: 'https://www.linkedin.com/in/pierre-eric-garcia/',
    img: 'PierreEric.jpg',
  },
  {
    name: 'Amandine Audras',
    title: 'Designeuse produit Datapass',
    linkedin: 'https://www.linkedin.com/in/amandineaudras/',
    img: 'Amandine.jpg',
  },
];

const Team: React.FC = () => (
  <Page
    title="L'équipe"
    description="L'équipe derrière le site, à votre disposition pour construire les services numériques de demain"
    canonical={`https://api.gouv.fr/equipe`}
  >
    <div className="text-wrapper text-style">
      <h1 className="layout-center">L’équipe des API </h1>
      <h2>Une équipe, une mission</h2>
      <p>
        Au sein des administrations, la donnée est une ressource dispersée,
        hétérogène et difficile d’accès. Les organisations qui construisent des
        services numériques pour les citoyens ou les agents de la fonction
        publique ont besoin de cette donnée et doivent faire face à :
      </p>
      <ul>
        <li>la multiplicité des sources de données et des interlocuteurs</li>
        <li>
          la difficulté d’identifier la bonne source de donnée, adaptée à leur
          service
        </li>
        <li>la difficulté d’obtenir l’accès à la donnée</li>
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
      <h3>Où nous trouver ?</h3>
      <p>
        Les bureaux de l’équipe se trouvent au sein de la Direction
        Interministérielle du Numérique (DINUM), au 20 avenue de Ségur à Paris
        (75007).
      </p>
      <h3>La fine équipe</h3>
      <div className="default-grid">
        {teamData.map(teamate => (
          <a
            href={teamate.linkedin}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="dont-apply-link-style medaillon"
            key={teamate.name}
          >
            <div className="img-wrapper">
              <img src={`/images/equipe/${teamate.img}`} alt="" />
              <svg width="0" height="0">
                <defs>
                  <clipPath id="mask">
                    <path
                      d="M13 10C6.5 17 1 43 0.5 58.5C0.5 71.3333 4.6 99 21 107C41.5 117 49 105.5 63.5 107C78 108.5 83 115.5 96.5 115.5C104.5 115.5 113.607 101.571 116.5 90C119.5 78 119 40 110 22.5C101 5 87.3185 -0.550104 79 2.5C64 8 42.5 0 36 0C29.5 0 19.5 3 13 10Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
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
        width: 100%;
        display: block;
        margin: auto;
        clip-path: url(#mask);
      }

      .medaillon .img-wrapper {
        position: relative;
        display: block;
        width: 120px;
        margin: auto;
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

      .medaillon:hover h4 {
        text-decoration: underline;
      }
      .medaillon:hover .linkedin {
        background-color: #0e76a8;
      }
      .medaillon:after {
        display: none;
      }
    `}</style>
  </Page>
);

export default Team;
