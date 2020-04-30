import React, { useState } from 'react';
import { VISITOR, ContactForm } from './index';
import { Dropdown, ButtonLink } from '../../uiComponents';
import constants from '../../constants';

enum SUBJECT {
  API_PUBLIC = 4,
  FRANCECONNECT = 1,
  TELEPOINT = 2,
  OTHER = 3,
}

interface SubjectProps {
  subject: SUBJECT;
}

const SubjectRouter: React.FC<SubjectProps> = ({ subject }) => {
  switch (subject) {
    case SUBJECT.API_PUBLIC:
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
          <p>
            Au fait, connaissez-vous le{' '}
            <a href="https://data.gouv.fr">
              portail de nos collègues de l’open data ?
            </a>
          </p>
        </div>
      );
    case SUBJECT.FRANCECONNECT:
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
          </p>
          <p>En particulier, nous vous recommandons de jeter un oeil à :</p>
          <div className="layout-center">
            <ButtonLink large href="https://franceconnect.gouv.fr/faq">
              Accèder à la page d’aide France Connect
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
              large
              href="https://permisdeconduire.ants.gouv.fr/Vos-demarches/Le-permis-a-points/Solde-de-vos-points-via-une-identite-France-Connect"
            >
              Accèder au site télépoint
            </ButtonLink>
          </div>
        </div>
      );
    case SUBJECT.OTHER:
      return <ContactForm visitor={VISITOR.PARTICULIER} />;
  }
};

const Individuals: React.FC<{}> = () => {
  const [subject, setSubject] = useState<SUBJECT | null>(null);
  const options = [
    {
      value: SUBJECT.API_PUBLIC,
      label: 'Je cherche une API du service public',
    },
    {
      value: SUBJECT.FRANCECONNECT,
      label: 'Je veux me connecter à France Connect',
    },
    {
      value: SUBJECT.TELEPOINT,
      label: 'Je cherche mon solde de points de permis de conduire',
    },
    {
      value: SUBJECT.OTHER,
      label: 'J’ai une question pour l’équipe api.gouv.fr',
    },
  ];

  return (
    <>
      <div className="highlight-warning">
        <span role="img" aria-label="emoji warning">
          ⚠️
        </span>
        <b>Attention :</b> site s’adresse aux collectivités, aux administrations
        et aux entreprises.
        <br />
        Il est probable que n’ayons pas la réponse à votre question, mais nous
        pouvons peut-être vous ré-orienter vers le bon service.
      </div>
      <div className="contact-form-question">
        <span>Comment pouvons vous aider ? </span>
        <Dropdown
          onChange={setSubject}
          selectOptions={options}
          placeholder="Choississez votre question"
        />
      </div>
      {subject && <SubjectRouter subject={subject} />}
      <style global jsx>{`
        .highlight-warning {
          border-left: 5px solid ${constants.colors.orange};
          background-color: ${constants.colors.lightOrange};
          color: ${constants.colors.darkOrange};
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin: 1.5rem 0;
        }
        .subject-answer {
          border-radius: 15px;
          padding: 30px;
          margin: 30px 0;
          border: 4px solid ${constants.colors.blue};
          position: relative;
        }
        .subject-answer:before {
          top: -26px;
          left: 20px;
          background-color: #fff;
          padding: 10px;
          position: absolute;
          content: 'Explication';
        }
      `}</style>
    </>
  );
};

export default Individuals;
