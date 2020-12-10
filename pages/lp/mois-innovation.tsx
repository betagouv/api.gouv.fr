import React from 'react';

import Page from '../../layouts/page';
import { ButtonLink, ExternalLink } from '../../uiComponents';
import constants from '../../constants';
import { logLPCTA } from '../../utils/client/analytics';

const MoisInno: React.FC = () => (
  <Page
    title="A quelles données publiques rêvez d'avoir accès ?"
    description="Participer à l'appel à idée de l'équipe API dans le cadre du mois de l'innovation publique"
    usePreFooter={false}
    noIndex={true}
  >
    <div className="hero-section text-wrapper text-style">
      <div>
        <h1>A quelles données publiques rêvez vous d'avoir accès ?</h1>
        <h2>
          Dans le cadre du mois de l'innovation publique, participez à notre
          appel à idées
        </h2>
        <ButtonLink
          href="https://framaforms.org/quelles-donnees-publiques-revez-vous-davoir-appel-a-idees-1602761927"
          onClick={() => logLPCTA('Bouton_top')}
        >
          J'envoie mon idée de projet
        </ButtonLink>
      </div>
      <div>
        <img src="/images/landing-page/illu_LP.svg" alt="" />
      </div>
    </div>
    <div className="question-section section">
      <div className="text-wrapper text-style">
        <p>
          Administrations, collectivités, entreprises, associations, citoyens,
          cet appel à idées vous concerne ! La mission de l'équipe API est de
          faciliter la circulation des données afin de :
        </p>
        <ul>
          <li>permettre la création de nouveaux services</li>
          <li>
            simplifier des services existants et dématérialiser des démarches
          </li>
          <li>faciliter le développement de nouveaux usages</li>
        </ul>
        <p>
          Dans le cadre de cette mission nous souhaitons recueillir{' '}
          <b>vos demandes d'accès à des données publiques</b> et les{' '}
          <b>services que vous souhaitez construire</b> grâce à ces données.
        </p>
        <p>
          Par données publiques nous entendons{' '}
          <ExternalLink href="https://www.cada.fr/particulier/le-document-est-il-administratif">
            les documents administratifs
          </ExternalLink>
          produits ou reçus dans le cadre d'une mission de service public par
          l'Etat, les collectivités territoriales ainsi que par les autres
          personnes de droit public ou de droit privé chargées d'une telle
          mission.
        </p>
      </div>
    </div>
    <div className="section">
      <div className="text-wrapper text-style">
        <h3 className="text-center">
          Comment nous allons valoriser vos contributions
        </h3>
        <div>
          <p>
            Vos contributions sont récoltées à travers un formulaire FramaForm.
            Nous souhaitons :
          </p>
          <ul>
            <li>
              Mieux comprendre les données qui vous intéressent et l'usage que
              vous souhaitez en avoir
            </li>
            <li>
              Produire une synthèse courant décembre présentant les grandes
              tendances qui ressortent de cet appel à idée
            </li>
            <li>
              Contacter les différents fournisseurs de donnés afin d'envisager
              la mise à disposition de ces dernières
            </li>
          </ul>
          <div className="layout-center">
            <ButtonLink
              href="https://framaforms.org/quelles-donnees-publiques-revez-vous-davoir-appel-a-idees-1602761927"
              onClick={() => logLPCTA('Bouton_middle')}
            >
              Je soumets mon idée de projet
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
          Dans le cadre du mois de l'innovation publique, la DINUM se mobilise
          afin de récolter vos idées de projets et les données publiques
          auxquelles vous rêveriez d'accéder afin de les réaliser.
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
            href="mailto:contact@api.gouv.fr?subject=Mois+de+l%E2%80%99innovation+%3A+question+sur+l%E2%80%99appel+%C3%A0+id%C3%A9es"
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

export default MoisInno;
