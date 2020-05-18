import React, { FormEvent, useRef } from 'react';

import constants from '../../constants';
import { ButtonLink } from '../../uiComponents';

export enum VISITOR {
  ADMINISTRATION = 'Administration',
  EDITOR = 'Editeur',
  PARTICULIER = 'Particulier',
  COLLECTIVITE = 'Collecitvité',
  ENTREPRISE = 'Entreprise',
}

interface IProps {
  visitorType: VISITOR;
  label?: string;
}

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
        label ? label : 'Question api.gouv.fr'
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
        <ButtonLink type="submit">Envoyer</ButtonLink>
      </div>
    </form>
  );
};

export default ContactForm;
