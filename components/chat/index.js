import React, { useState, useRef } from 'react';
import { MessageSquare, X } from 'react-feather';

import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';

import './chatStyles.scss';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const subject = useRef(null);
  const body = useRef(null);

  const openMail = e => {
    if (!subject || !subject.current || !body || !body.current) {
      return;
    }
    const subjectVal = subject.current.value;
    const bodyVal = body.current.value;
    if (!subject || !body) {
      return;
    }
    window.location.href = encodeURI(
      `${constants.links.mailto.SUPPORT}?subject=[Question api.gouv.fr] ${subjectVal}&body=${bodyVal}`
    );
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <div
      role="dialog"
      id="chat-container"
      className={`${isOpen ? 'show' : 'hidden'}`}
    >
      <div className="chat-header">
        <button
          aria-label="Ouvrir chat"
          className="chat-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageSquare color={constants.colors.smartData} />
        </button>
        <div className="chat-title">
          Vous avez une question ? L’équipe d'api.gouv.fr vous répond.
        </div>
        <button
          aria-label="Fermer chat"
          className="close"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>
      {isOpen && (
        <form onSubmit={openMail}>
          <label htmlFor="question">Votre question</label>
          <input
            id="question"
            placeholder="Comment pouvons nous vous aider ?"
            type="text"
            ref={subject}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Détaillez ici votre question"
            type="text"
            ref={body}
            required
          />
          <div className="submit">
            <ButtonLink type="submit">Envoyer</ButtonLink>
          </div>
        </form>
      )}
    </div>
  );
};

export default Chat;
