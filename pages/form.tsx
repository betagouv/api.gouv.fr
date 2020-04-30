import React, { useState } from 'react';

import Page from '../layouts/page';
import { VISITOR, VisitorRouter } from '../components/customerPath';
import { Dropdown } from '../uiComponents';

export default () => {
  const [statut, setStatut] = useState<VISITOR | null>(null);
  const options = [
    { value: VISITOR.PARTICULIER, label: 'Je suis un particulier' },
    {
      value: VISITOR.ADMINISTRATION,
      label: 'Je suis une administration ou une collectivité',
    },
    {
      value: VISITOR.EDITOR,
      label:
        'Je suis un editeur de logiciel pour une administration ou une collectivité',
    },
    { value: VISITOR.ENTREPRISE, label: 'Je suis une entreprise' },
  ];
  return (
    <Page title="Formulaire de contact" usePreFooter={false}>
      <div className="text-container">
        <h1>
          Bonjour&nbsp;
          <span role="img" aria-label="emoji hello">
            👋
          </span>
          , comment pouvons nous vous aider&nbsp;?
        </h1>
        <p>
          Pour bien commencer, nous avons besoin d’en apprendre un peu plus sur
          vous :
        </p>
        <div className="contact-form-question">
          <span>Qui êtes-vous ?</span>
          <Dropdown
            onChange={setStatut}
            selectOptions={options}
            placeholder="Choisissez une option"
          />
        </div>
        {statut && <VisitorRouter visitor={statut} />}
      </div>
      <style global jsx>{`
        .contact-form-question {
          display: flex;
          align-items: center;
        }
        .contact-form-question > span {
          margin-right: 15px;
        }
      `}</style>
    </Page>
  );
};
