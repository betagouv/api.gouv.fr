import React, { useState } from 'react';
import { VISITOR, ContactForm } from './index';
import { Dropdown, ButtonLink } from '../../uiComponents';
import constants from '../../constants';

enum SUBJECT {
  FRANCECONNECT = 1,
  CARTE_GRISES = 2,
  OTHER = 3,
}

interface SubjectProps {
  subject: SUBJECT;
}

const SubjectRouter: React.FC<SubjectProps> = ({ subject }) => {
  switch (subject) {
    case SUBJECT.FRANCECONNECT:
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
          Il n’existe pas a ce jour d’API qui référence les cartes grises
        </div>
      );
    case SUBJECT.OTHER:
      return <ContactForm visitor={VISITOR.PARTICULIER} />;
  }
};

const Companies: React.FC<{}> = () => {
  const [subject, setSubject] = useState<SUBJECT | null>(null);
  const options = [
    {
      value: SUBJECT.FRANCECONNECT,
      label: 'Je veux France Connecter mon entreprise',
    },
    {
      value: SUBJECT.CARTE_GRISES,
      label: 'Je cherche un réferentiel des cartes grises',
    },
    {
      value: SUBJECT.OTHER,
      label: 'J’ai une question pour l’équipe api.gouv.fr',
    },
  ];

  return (
    <>
      <div className="highlight-info">
        <p>
          En tant qu'entreprise, vous êtes libre d’utiliser <b>toutes</b> les
          APIs ouvertes à tous et <b>certaines</b> des APIs nécessitant une
          habilitation.
        </p>
        <p>
          Toutes nos APIs sont visibles{' '}
          <a href="rechercher-api">sur cette page</a>. Si une API vous
          intéresse, pensez à vérifier dans la section <b>Accès</b> de la fiche
          API quelles sont les conditions d'accès à la donnée.
        </p>
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
        .highlight-info {
          border-left: 5px solid ${constants.colors.blue};
          background-color: ${constants.colors.lightBlue};
          color: ${constants.colors.blue};
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

export default Companies;
