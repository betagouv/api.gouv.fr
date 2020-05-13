import React, { useState } from 'react';
import { ContactForm } from './index';
import { Dropdown } from '../../uiComponents';

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
      return <div className="subject-answer">Explications</div>;
    case SUBJECT.CARTE_GRISES:
      return <div className="subject-answer">Explications</div>;
    case SUBJECT.OTHER:
      return <ContactForm visitorType="Administration ou collectivité" />;
  }
};

const Public: React.FC<{}> = () => {
  const [subject, setSubject] = useState<SUBJECT | null>(null);
  const options = [
    {
      value: SUBJECT.CARTE_GRISES,
      label: 'Je cherche une API',
    },
    {
      value: SUBJECT.FRANCECONNECT,
      label: 'Je veux ajouter une API au catalogue api.gouv',
    },
    {
      value: SUBJECT.CARTE_GRISES,
      label: 'Je ne trouve pas l’API dont j’ai besoin',
    },
    {
      value: SUBJECT.OTHER,
      label: 'J’ai une question pour l’équipe api.gouv.fr',
    },
  ];

  return (
    <>
      <div className="contact-form-question">
        <span>Comment pouvons vous aider ? </span>
        <Dropdown
          onChange={setSubject}
          selectOptions={options}
          placeholder="Choississez votre question"
        />
      </div>
      {subject && <SubjectRouter subject={subject} />}
    </>
  );
};

export default Public;
