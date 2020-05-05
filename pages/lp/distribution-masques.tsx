import React from 'react';

import Page from '../../layouts/page';
import { ButtonLink } from '../../uiComponents';
import constants from '../../constants';
import { logLPCTA1, logLPCTA2, logLPContact } from '../../service/analytics';

const Masks: React.FC = () => (
  <Page
    title="Utiliser les APIs pour protéger vos concitoyens"
    description="Comment utiliser les APIs pour faciliter la distribution de masques pendant la crise du Covid-19"
    usePreFooter={false}
  >
    <div className="hero-section text-container">
      <h1>Gagnez du temps et protégez vos concitoyens</h1>
      <h2>
        Simplifiez la distribution de masques dans votre commune grace à une API
      </h2>
      <ButtonLink
        href="https://signup.api.gouv.fr/api-particulier"
        onClick={logLPCTA1}
      >
        Je veux créer un service de distribution de masques dans ma collectivité
      </ButtonLink>
    </div>
    <div className="question-section section">
      <div className="text-container">
        <p>
          En intégrant API particulier à votre portail citoyen, il suffit à vos
          concitoyens de donner leur numero fiscal et leur numéro d'allocataire
          pour que votre équipe accéde à :
        </p>
        <ul>
          <li>
            l'adresse connue par l'administration fiscale au 1er janvier et le
            nombre de personnes à charge
          </li>
          <li>
            l'adresse ainsi que la composition de son foyer familial (adulte et
            enfant) connue par la CAF
          </li>
        </ul>
        <p>
          Avec ces informations, déterminez le{' '}
          <b>nombre de masques à distribuer pour chaque foyer</b>, ainsi que la
          taille des masques, adulte ou enfant, en fonction de la date de
          naissance.
        </p>
        <p>
          Organisez la campagne de distribution grace aux adresses recueillies.
          La distribution de masques dans les foyers français est un{' '}
          <b>impératif de santé publique</b>.
        </p>
      </div>
    </div>
    <div className="section">
      <div className="text-container">
        <h3 className="text-center">
          Comment mettre en place ce service dans ma ville ?
        </h3>
        <div>
          Vous êtes prêt à connecter votre ville ? Voici les étapes à suivre :
          <ul>
            <li>Demandez accès à API particulier</li>
            <li>Connectez votre portail citoyen</li>
            <li>Organisez la distribution de masque</li>
          </ul>
          <div className="layout-center">
            <ButtonLink
              href="https://signup.api.gouv.fr/api-particulier"
              onClick={logLPCTA2}
            >
              Je connecte ma ville à API particulier
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>

    <div className="qui-sommes-nous section">
      <div className="text-container">
        <h3 className="text-center">Qui sommes-nous ?</h3>
        <p>Ici on raconte qui nous sommes</p>
      </div>
    </div>
    <div className="section">
      <div className="text-container">
        <h3 className="text-center">
          Vous avez une question ? <br />
          Vous avez besoin d’aide pour connecter un service citoyen a une API ?
        </h3>
        <div className="layout-center">
          <ButtonLink
            href={constants.links.mailto.SUPPORT}
            onClick={logLPContact}
          >
            Comment pouvons-nous vous aider ?
          </ButtonLink>
        </div>
      </div>
    </div>
    <style jsx>{`
      .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
      }
      h2,
      h1 {
        text-align: center;
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
