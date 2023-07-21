import React from 'react';

import { ButtonLink } from '../../uiComponents';
import { VISITOR } from './contactForm';
import { logParcoursClient } from '../../utils/client/analytics';

import { ContactForm } from './index';

export enum SUBJECT {
  CHERCHE_API,
  CHERCHE_API_PART,
  FRANCECONNECT_PART,
  FRANCECONNECT_PROBLM_PART,
  FRANCECONNECT_ENTREPRISE,
  NEW_API,
  CANT_FIND,
  CARTE_GRISES,
  TELEPOINT,
  DS,
  NONE,
  UPDATE_API,
}

const Questions = [
  {
    value: SUBJECT.CHERCHE_API_PART,
    label: 'Je cherche une API',
    public: [VISITOR.PARTICULIER],
  },
  {
    value: SUBJECT.CHERCHE_API,
    label: 'Je cherche une API',
    public: [
      VISITOR.ENTREPRISE,
      VISITOR.ASSO,
      VISITOR.ADMINISTRATION,
      VISITOR.COLLECTIVITE,
      VISITOR.EDITOR,
    ],
  },
  {
    value: SUBJECT.NEW_API,
    label: 'Je souhaite publier mon API sur api.gouv.fr',
    public: [VISITOR.ADMINISTRATION],
  },
  {
    value: SUBJECT.UPDATE_API,
    label: 'Je souhaite mettre à jour la fiche de mon API sur api.gouv.fr',
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
      VISITOR.ASSO,
    ],
  },
  {
    value: SUBJECT.FRANCECONNECT_PROBLM_PART,
    label: 'J’ai un problème avec FranceConnect',
    public: [VISITOR.PARTICULIER],
  },
  {
    value: SUBJECT.FRANCECONNECT_PART,
    label: 'Je veux me connecter à FranceConnect',
    public: [VISITOR.PARTICULIER],
  },
  {
    value: SUBJECT.CARTE_GRISES,
    label:
      'Je cherche une API des plaques d’immatriculation, du SIV ou des cartes grises',
    public: [VISITOR.ENTREPRISE],
  },
  {
    value: SUBJECT.DS,
    label: 'Je cherche démarches simplifiées',
    public: [VISITOR.PARTICULIER],
  },
  {
    value: SUBJECT.FRANCECONNECT_ENTREPRISE,
    label: 'Je veux FranceConnecter mon service',
    public: [VISITOR.ENTREPRISE, VISITOR.ASSO],
  },
  {
    value: SUBJECT.TELEPOINT,
    label: 'Je cherche mon solde de points de permis de conduire',
    public: [VISITOR.PARTICULIER],
  },
];

interface IProps {
  subject: SUBJECT;
  visitorType: VISITOR;
}

export const logClic = () => {
  logParcoursClient('4. Clic sur le CTA');
};

const Explanations: React.FC<IProps> = ({ subject, visitorType }) => {
  switch (subject) {
    case SUBJECT.CHERCHE_API_PART:
      return (
        <div className="subject-answer">
          <p>
            Ce site internet référence les API des administrations qui rendent
            leur données disponibles.
          </p>
          <p>
            En tant que particulier, vous êtes libre d’utiliser les{' '}
            <b>API ouvertes à tous</b>. Les API nécessitant une habilitation
            sont réservées aux organisations éligibles (acteurs publics et dans
            certains cas, entreprises).
          </p>
          <p>
            Toutes nos API sont visibles{' '}
            <a href="rechercher-api">sur cette page</a>. Cliquez sur "Uniquement
            les API ouvertes à tous" pour n’afficher que les API ouvertes.
          </p>
          <div className="layout-center">
            <ButtonLink size="large" href="/rechercher-api" onClick={logClic}>
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
    case SUBJECT.CHERCHE_API:
      const word =
        visitorType === VISITOR.ENTREPRISE || visitorType === VISITOR.ASSO
          ? 'acteur privé'
          : visitorType === VISITOR.EDITOR
          ? 'éditeur'
          : 'acteur public';
      return (
        <div className="subject-answer">
          <p>
            En tant qu'{word}, vous êtes libre d’utiliser <b>toutes</b> les API
            ouvertes à tous et <b>certaines</b> des API nécessitant une
            habilitation.
          </p>
          <p>
            Toutes nos API sont visibles{' '}
            <a href="rechercher-api">sur cette page</a>. Si une API vous
            intéresse, pensez à vérifier dans la section <b>Accès</b> de la
            fiche API quelles sont les conditions d'accès à la donnée.
          </p>
          <div className="layout-center">
            <ButtonLink size="large" href="/rechercher-api" onClick={logClic}>
              Rechercher une API
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.FRANCECONNECT_PROBLM_PART:
      return (
        <div className="subject-answer">
          <p>
            Si vous rencontrez un problème avec FranceConnect, nous vous
            recommandons de contacter directement l’équipe via la FAQ de
            FranceConnect :
          </p>
          <div className="layout-center">
            <ButtonLink
              size="large"
              href="https://franceconnect.gouv.fr/faq"
              onClick={logClic}
            >
              Accéder à la page d’aide France Connect
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.FRANCECONNECT_PART:
      return (
        <div className="subject-answer">
          <p>
            Ce site internet <b>ne permet pas</b> de se connecter à France
            Connect
          </p>
          <p>
            Vous trouverez plus d’explications sur{' '}
            <a href="https://franceconnect.gouv.fr">le site de FranceConnect</a>
            . En particulier, nous vous recommandons de consulter la FAQ France
            Connect :
          </p>
          <div className="layout-center">
            <ButtonLink
              size="large"
              href="https://franceconnect.gouv.fr/faq"
              onClick={logClic}
            >
              Accéder à la page d’aide France Connect
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
            <ButtonLink
              size="large"
              onClick={logClic}
              href="https://datapass.api.gouv.fr/franceconnect?source=api_gouv_customer_path_entreprise"
            >
              Remplir une demande
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.CARTE_GRISES:
      return (
        <div className="subject-answer">
          <p>
            À notre connaissance, il n’existe pas d’API qui référence les cartes
            grises ou les immatriculations de véhicules.
          </p>
          <p>
            Pour plus d’informations vous pouvez contacter le site internet du
            ministère de l’intérieur :
          </p>
          <div className="layout-center">
            <ButtonLink
              size="large"
              href="https://immatriculation.ants.gouv.fr"
              onClick={logClic}
            >
              Consulter le site de l’ANTS
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.DS:
      return (
        <div className="subject-answer">
          <p>
            Ce site ne permet pas de faire une démarche sur{' '}
            <a href="https://demarches-simplifiees.fr">
              démarches-simplifiées.
            </a>
          </p>
          <p>Cliquez sur les liens ci-dessous pour :</p>
          <ul>
            <li>
              <a href="https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relatives-aux-medailles-dhonneur">
                Faire une demande de médaille d'honneur
              </a>
            </li>
            <li>
              <a href="https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relatives-aux-titres-de-sejour-pour-les-etrangers">
                Faire une demande de titre de séjour
              </a>
            </li>
            <li>
              <a href="https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relatives-au-permis-de-conduire">
                Faire une demande de numéro NEPH
              </a>
            </li>
            <li>
              <a href="https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relative-a-linscription-au-service-de-restauration">
                Faire une demande d'inscription scolaire
              </a>
            </li>
          </ul>
          <div className="layout-center">
            <ButtonLink
              size="large"
              href="https://demarches-simplifiees.fr"
              onClick={logClic}
            >
              Consultez le site démarches-simplifiées
            </ButtonLink>
          </div>
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
              size="large"
              onClick={logClic}
              href="https://permisdeconduire.ants.gouv.fr/Vos-demarches/Le-permis-a-points/Solde-de-vos-points-via-une-identite-France-Connect"
            >
              Accéder au site télépoint
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
            La demande d’ajout de nouvelle API se fait en autonomie via GitHub.
            Votre demande sera traitée dès que possible, et nous vous aiderons à
            l'améliorer le cas échéant
          </p>
          <div className="layout-center">
            <ButtonLink
              size="large"
              onClick={logClic}
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
