import React, { FormEvent, useRef } from 'react';

import constants from '../../constants';
import { ButtonLink } from '../../uiComponents';
import { logParcoursClient } from '../../utils/client/analytics';

export enum VISITOR {
  ADMINISTRATION = 'Administration',
  EDITOR = 'Editeur',
  PARTICULIER = 'Particulier',
  COLLECTIVITE = 'Collectivité',
  ENTREPRISE = 'Entreprise',
  ASSO = 'Association',
}

interface IProps {
  visitorType: VISITOR;
  label?: string;
}

export const logClic = () => {
  logParcoursClient('4. Envoie le formulaire de contact');
};

const ContactForm: React.FC<IProps> = ({ visitorType, label }) => {
  const body = useRef(null);

  const openMail = (e: FormEvent) => {
    if (!body || !body.current) {
      e.preventDefault();
      return;
    }
    const subjectVal = `[Parcours client][${visitorType}]`;
    //@ts-ignore
    const bodyVal = body.current.value;
    e.preventDefault();

    window.location.href = encodeURI(
      `${constants.links.mailto.SUPPORT}?subject=[${
        label ? label : 'Question'
      }] ${subjectVal}&body=${bodyVal}`
    );
  };
  return (
    <form id="contact-form" onSubmit={openMail}>
      <label htmlFor="question">{label || 'Quelle est votre question ?'}</label>
      <textarea
        id="description"
        placeholder="Détaillez ici votre question"
        ref={body}
        required
      />
      <div className="submit layout-center">
        <ButtonLink type="submit" size="large" onClick={logClic}>
          Envoyer
        </ButtonLink>
      </div>
    </form>
  );
};

export default ContactForm;
