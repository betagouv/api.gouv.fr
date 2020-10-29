import React from 'react';

import Page from '../../layouts/page';
import { ButtonLink } from '../../uiComponents';
import constants from '../../constants';
import { logLPCTA } from '../../utils/client/analytics';

const Masks: React.FC = () => (
  <Page
    title="Gagnez du temps et protégez vos concitoyens"
    description="Comment faciliter la distribution de masques pendant la crise du Covid-19"
    usePreFooter={false}
    noIndex={true}
  >
    <div className="hero-section text-wrapper text-style">
      <div>
        <h1>Gagnez du temps et protégez vos concitoyens</h1>
        <h2>Simplifiez la distribution de masques dans votre commune</h2>
        <ButtonLink
          href="https://datapass.api.gouv.fr/api-particulier"
          onClick={() => logLPCTA('Bouton_top')}
        >
          Je veux créer un service de distribution de masques
        </ButtonLink>
      </div>
      <div>
        <img src="/images/landing-page/illu_LP.svg" alt="" />
      </div>
    </div>
    <div className="question-section section">
      <div className="text-wrapper text-style">
        <p>
          En connectant le portail de votre ville à l’API Particulier, il suffit
          à vos concitoyens de donner leur numéro fiscal et leur numéro
          d'allocataire pour que votre équipe puisse accéder à :
        </p>
        <ul>
          <li>
            l'adresse connue par l'administration fiscale au 1er janvier et le
            nombre de personnes à charge
          </li>
          <li>
            l'adresse ainsi que la composition du foyer familial (adulte et
            enfant) pour les allocataires CAF
          </li>
        </ul>
        <p>
          Avec ces informations, déterminez le{' '}
          <b>nombre de masques à distribuer pour chaque foyer</b>, ainsi que la
          taille des masques, adulte ou enfant, en fonction de la date de
          naissance.
        </p>
        <p>
          Organisez la campagne de distribution grâce aux adresses recueillies.
          La distribution de masques dans les foyers français est un{' '}
          <b>impératif de santé publique</b>.
        </p>
      </div>
    </div>
    <div className="section">
      <div className="text-wrapper text-style">
        <h3 className="text-center">
          Comment mettre en place ce service dans ma ville ?
        </h3>
        <div>
          Vous êtes prêt à connecter votre ville ? Voici les étapes à suivre :
          <ul>
            <li>Demandez votre accès à l’API particulier</li>
            <li>Connectez votre portail citoyen</li>
            <li>Organisez la distribution de masques</li>
          </ul>
          <div className="layout-center">
            <ButtonLink
              href="https://datapass.api.gouv.fr/api-particulier"
              onClick={() => logLPCTA('Bouton_middle')}
            >
              Je connecte ma ville à l’API Particulier
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>

    <div className="qui-sommes-nous section">
      <div className="text-wrapper text-style text-center">
        <h3>Qui sommes-nous ?</h3>
        <p>
          La DINUM accompagne les ministères dans leur transformation numérique,
          conseille le gouvernement et développe des services et ressources
          partagées comme le réseau interministériel de l’État, FranceConnect,
          data.gouv.fr ou api.gouv.fr.
        </p>
        <p>
          Dans le cadre de la crise sanitaire relative au COVID-19, la DINUM se
          mobilise afin de mettre à disposition des territoires ses outils et
          son expertise et faciliter ainsi la mise en œuvre de démarches en
          ligne à destination des usagers.
        </p>
      </div>
    </div>
    <div className="section">
      <div className="text-wrapper text-style">
        <h3 className="text-center">
          Vous avez une question ? <br />
          Vous avez besoin d’aide pour connecter un service citoyen à une API ?
        </h3>
        <div className="layout-center">
          <ButtonLink
            href={constants.links.mailto.SUPPORT}
            onClick={() => logLPCTA('Bouton_contact')}
          >
            Comment pouvons-nous vous aider ?
          </ButtonLink>
        </div>
      </div>
    </div>
    <style jsx>{`
      .hero-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        margin-top: 20px;
      }

      .hero-section > div:first-of-type {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
      }

      .hero-section > div:last-of-type {
        width: 600px;
        margin-left: 20px;
      }

      .hero-section > div:last-of-type > img {
        width: 100%;
      }
      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .hero-section > div:first-of-type {
          align-items: center;
          text-align: center;
        }
        .hero-section > div:last-of-type {
          display: none;
        }
      }

      h2 {
        font-size: 1.2rem;
      }
      h1 {
        margin-top: 20px;
        margin-bottom: 10px;
      }
      ul {
        margin-bottom: 40px;
      }
      .question-section {
        width: 100%;
        background-color: ${constants.colors.lightBlue};
        padding: 10px 0;
      }
      .text-center {
        text-align: center;
      }
      .qui-sommes-nous {
        background-color: ${constants.colors.lightestGrey};
      }

      .section {
        padding: 10px 0;
      }
      .section > div {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    `}</style>
  </Page>
);

export default Masks;
