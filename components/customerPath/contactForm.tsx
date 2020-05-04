import React, { FormEvent } from 'react';
import { VISITOR } from './index';
import { TextArea } from '../../uiComponents';

interface IProps {
  visitor: VISITOR;
}

const ContactForm: React.FC<IProps> = ({ visitor }) => {
  const submit = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      visitor,
    };
  };
  return (
    <>
      <div className="chat-title">
        Posez votre question ? L’équipe d'api.gouv.fr vous répond.
      </div>
      <form onSubmit={submit}>
        <TextArea onChange={() => null} />
        <button type="submit">Contact-contact</button>
      </form>
    </>
  );
};

export default ContactForm;
