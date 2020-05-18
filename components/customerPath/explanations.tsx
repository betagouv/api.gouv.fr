import React from 'react';

import { ButtonLink } from '../../uiComponents';
import { VISITOR } from './contactForm';

import { ContactForm } from './index';

export enum SUBJECT {
  CHERCHE_API_ENTREPRISE,
  CHERCHE_API_PARTICULIER,
  CHERCHE_API_PUBLIC,
  FRANCECONNECT_PARTICULIER,
  FRANCECONNECT_ENTREPRISE,
  NEW_API,
  CANT_FIND,
  CARTE_GRISES,
  TELEPOINT,
  CONTACT,
}

const Questions = [
  {
    value: SUBJECT.CHERCHE_API_PARTICULIER,
    label: 'Je cherche une API',
    public: [VISITOR.PARTICULIER],
  },
  {
    value: SUBJECT.CHERCHE_API_ENTREPRISE,
    label: 'Je cherche une API',
    public: [VISITOR.ENTREPRISE],
  },
  {
    value: SUBJECT.CHERCHE_API_PUBLIC,
    label: 'Je cherche une API',
    public: [VISITOR.ADMINISTRATION, VISITOR.COLLECTIVITE, VISITOR.EDITOR],
  },

  {
    value: SUBJECT.NEW_API,
    label: 'Je veux ajouter une API au catalogue api.gouv',
    public: [VISITOR.ADMINISTRATION],
  },
  {
    value: SUBJECT.CANT_FIND,
    label: 'Je ne trouve pas l’API dont j’ai besoin',
    public: [
      VISITOR.ENTREPRISE,
      VISITOR.ADMINISTRATION,
      VISITOR.COLLECTIVITE,
      VISITOR.EDITOR,
    ],
  },
  {
    value: SUBJECT.FRANCECONNECT_PARTICULIER,
    label: 'Je veux me connecter à France Connect',
    public: [VISITOR.PARTICULIER],
  },
  {
    value: SUBJECT.FRANCECONNECT_ENTREPRISE,
    label: 'Je veux France Connecter mon entreprise',
    public: [VISITOR.ENTREPRISE],
  },
  {
    value: SUBJECT.TELEPOINT,
    label: 'Je cherche mon solde de points de permis de conduire',
    public: [VISITOR.PARTICULIER],
  },
  {
    value: SUBJECT.CONTACT,
    label: 'J’ai une question pour l’équipe api.gouv.fr',
    public: [
      VISITOR.ENTREPRISE,
      VISITOR.ADMINISTRATION,
      VISITOR.COLLECTIVITE,
      VISITOR.PARTICULIER,
      VISITOR.EDITOR,
    ],
  },
];

interface IProps {
  subject: SUBJECT;
  visitorType: VISITOR;
}

const Explanations: React.FC<IProps> = ({ subject, visitorType }) => {
  switch (subject) {
    case SUBJECT.CHERCHE_API_PARTICULIER:
      return (
        <div className="subject-answer">
          <p>
            Ce site internet référence les APIs des administrations qui rendent
            leur données disponibles.
          </p>
          <p>
            En tant que particulier, vous êtes libre d’utiliser les{' '}
            <b>APIs ouvertes à tous</b>. Les APIs nécessitant une habilitation
            sont réservées aux organisations éligibles (acteurs publics et dans
            certains cas, entreprises).
          </p>
          <p>
            Toutes nos APIs sont visibles{' '}
            <a href="rechercher-api">sur cette page</a>. Cliquez sur "Uniquement
            les APIs ouvertes à tous" pour n’afficher que les APIs ouvertes.
          </p>
          <div className="layout-center">
            <ButtonLink large href="/rechercher-api">
              Rechercher une API
            </ButtonLink>
          </div>
          <br />
          <p>
            Au fait, connaissez-vous le{' '}
            <a href="https://data.gouv.fr">
              portail de nos collègues de l’open data ?
            </a>
          </p>
        </div>
      );
    case SUBJECT.CHERCHE_API_ENTREPRISE:
      return (
        <div className="subject-answer">
          <p>
            En tant qu'entreprise, vous êtes libre d’utiliser <b>toutes</b> les
            APIs ouvertes à tous et <b>certaines</b> des APIs nécessitant une
            habilitation.
          </p>
          <p>
            Toutes nos APIs sont visibles{' '}
            <a href="rechercher-api">sur cette page</a>. Si une API vous
            intéresse, pensez à vérifier dans la section <b>Accès</b> de la
            fiche API quelles sont les conditions d'accès à la donnée.
          </p>
          <div className="layout-center">
            <ButtonLink large href="/rechercher-api">
              Rechercher une API
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.CHERCHE_API_PUBLIC:
      return (
        <div className="subject-answer">
          <p>
            En tant qu'acteur public, vous êtes libre d’utiliser <b>toutes</b>{' '}
            les APIs ouvertes à tous et <b>certaines</b> des APIs nécessitant
            une habilitation.
          </p>
          <p>
            Toutes nos APIs sont visibles{' '}
            <a href="rechercher-api">sur cette page</a>. Si une API vous
            intéresse, pensez à vérifier dans la section <b>Accès</b> de la
            fiche API quelles sont les conditions d'accès à la donnée.
          </p>
          <div className="layout-center">
            <ButtonLink large href="/rechercher-api">
              Rechercher une API
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.FRANCECONNECT_PARTICULIER:
      return (
        <div className="subject-answer">
          <p>
            Ce site internet <b>ne permet pas</b> de se connecter à France
            Connect
          </p>
          <p>
            Vous trouverez plus d’explications sur{' '}
            <a href="https://franceconnect.gouv.fr">
              le site de France Connect
            </a>
            . En particulier, nous vous recommandons de consulter la FAQ France
            Connect :
          </p>
          <div className="layout-center">
            <ButtonLink large href="https://franceconnect.gouv.fr/faq">
              Accèder à la page d’aide France Connect
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.FRANCECONNECT_ENTREPRISE:
      return (
        <div className="subject-answer">
          <p>
            Conformément à l'arrêté du 8 novembre 2018 relatif à FranceConnect ,
            les entreprises ou associations peuvent être éligibles dans les cas
            suivant:
          </p>
          <ul>
            <li>
              les personnes morales mentionnées au II et au III de l'article 1er
              de l'ordonnance du 28 avril 2005 qui proposent des services en
              ligne liés à la démarche de changement d'adresse et uniquement
              pour ces services
            </li>
            <li>
              les personnes morales de droit privé qui proposent des services en
              ligne dont l'usage nécessite, conformément à des dispositions
              législatives ou règlementaires, la vérification de l'identité de
              leurs utilisateurs ou de celle de certains de leurs attributs et
              uniquement pour les services qui nécessitent cette vérification
            </li>
          </ul>
          <p>
            Si vous avez vérifié que vous êtes élligible, vous pouvez remplir la
            demande :
          </p>
          <div className="layout-center">
            <ButtonLink large href="https://franceconnect">
              Remplir une demande
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.CARTE_GRISES:
      return (
        <div className="subject-answer">
          À notre connaissance, il n’existe pas à ce jour d’API qui référence
          les cartes grises ou les immatriculations de véhicules.
        </div>
      );
    case SUBJECT.TELEPOINT:
      return (
        <div className="subject-answer">
          <p>
            Ce site internet <b>ne permet pas</b> d’obtenir son décompte de
            points de permis de conduire.
          </p>
          <p>
            Le service que vous recherchez s’appelle <b>télépoints</b> et il est
            accessible à tous :
          </p>
          <div className="layout-center">
            <ButtonLink
              large
              href="https://permisdeconduire.ants.gouv.fr/Vos-demarches/Le-permis-a-points/Solde-de-vos-points-via-une-identite-France-Connect"
            >
              Accèder au site télépoint
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.NEW_API:
      return (
        <div className="subject-answer">
          <p>
            Vous êtes une administration et vous souhaiter exposer une API dans
            le catalogue api.gouv ? Vous êtes au bon endroit !
          </p>
          <p>
            La demande d’ajout de nouvelle API se fait de manière autonome via
            GitHub. Votre demande sera revue aussi vite que possible, et nous
            vous aiderons à l'améliorer le cas échéant.
          </p>
          <div className="layout-center">
            <ButtonLink
              large
              href="https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md"
            >
              Ajouter une nouvelle API
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.CANT_FIND:
      return (
        <ContactForm
          label="Demande de nouvelle API"
          visitorType={visitorType}
        />
      );
    default:
      return <ContactForm visitorType={visitorType} />;
  }
};
export { Questions, Explanations };
