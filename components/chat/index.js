import React, { useState, useCallback } from 'react';
import { MessageSquare, X } from 'react-feather';

import colors from '../../styles/colors';

import { ButtonLink } from '../../uiComponents/button';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState();
  const [body, setBody] = useState();

  const getMailto = useCallback(() => {
    return encodeURI(
      `mailto:contact@api.gouv.fr?subject=[Question api.gouv.fr] ${subject}&body=${body}`
    );
  }, [subject, body]);

  return (
    <div className={`chat-container ${isOpen ? 'show' : 'hidden'}`}>
      <div className="chat-header">
        <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
          <MessageSquare color={colors.smartData} />
        </div>
        <div className="chat-title">
          Vous avez une question ? L’équipe d'api.gouv.fr vous répond.
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </div>
      </div>
      <div className="form">
        <input
          placeholder="Votre question"
          onChange={e => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Description"
          onChange={e => setBody(e.target.value)}
        />
      </div>

      <div className="submit">
        <ButtonLink href={getMailto()} disabled={!Boolean(subject || body)}>
          Envoyer
        </ButtonLink>
      </div>

      <style jsx>{`
        .chat-container {
          z-index: 999;
          position: fixed;
          bottom: 0;
          right: 0;
          width: 380px;
          height: 390px;
          padding: 1em;
          background: #fff;
          margin: 1em;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          -webkit-transition: all 500ms ease-in-out;
        }

        .chat-container.hidden {
          bottom: -330px;
          right: -320px;
          box-shadow: none;
          background: none;
        }

        .chat-container.hidden textarea,
        .chat-container.hidden input,
        .chat-container.hidden .chat-title,
        .chat-container.hidden .submit {
          display: none;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1em;
        }

        .chat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.8em;
          background: #fff;
          border-radius: 100%;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .chat-title {
          font-weight: bold;
          font-size: large;
          margin: 0 1em;
        }

        .chat-icon:hover {
          cursor: pointer;
          box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.25);
        }

        .close {
          align-self: normal;
        }

        .close:hover {
          cursor: pointer;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        input,
        textarea {
          padding: 1em 0.5em;
          margin: 0.5em 0;
          border-radius: 4px;
          border: 1px solid #dde2e5;
        }

        textarea {
          height: 185px;
          resize: none;
        }

        .submit {
          position: absolute;
          right: 1em;
        }

        @media (max-width: 700px) {
          .chat-container {
            z-index: 999;
            position: fixed;
            height: 100%;
            width: 100%;
            padding: 1em;
            margin: 0;
          }

          .chat-container.hidden {
            width: 60px;
            height: 60px;
            right: 10px;
            bottom: 10px;
            background: none;
            box-shadow: none;
          }

          .chat-container.hidden .title,
          .chat-container.hidden .close {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Chat;
