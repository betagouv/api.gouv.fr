import React, { useState } from 'react';

import constants from '../../constants';
import { ButtonLink } from '../../uiComponents';
import { logFeedback } from '../../service/analytics';

export default () => {
  const [hasAnswered, setHasAnswered] = useState(false);

  const answer = (yesOrNo: Boolean) => {
    setHasAnswered(true);
    // send to matomo
    logFeedback(yesOrNo ? 'Oui' : 'Non');
  };

  return (
    <>
      <div id="feedback-widget">
        {!hasAnswered ? (
          <>
            <span role="img" aria-label="émoji hello">
              👋
            </span>
            <div className="separator" />
            <span>Est-ce que cette page vous a été utile ?</span>
            <div className="separator large" />
            <ButtonLink onClick={() => answer(true)} alt>
              Oui
            </ButtonLink>
            <div className="separator" />
            <ButtonLink onClick={() => answer(false)} alt>
              Non
            </ButtonLink>
          </>
        ) : (
          <div className="thanks">
            <div>
              <b>Merci pour votre réponse !</b>
            </div>
            <div>
              Aidez-nous à améliorer cette page en{' '}
              <a>remplissant ce rapide questionnaire.</a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        div#feedback-widget {
          background-color: ${constants.colors.lightBlue};
          color: ${constants.colors.darkGrey};
          border-radius: 8px;
          padding: 20px 10px;
          margin-top: 70px;
          border-bottom: none;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .separator {
          width: 15px;
        }
        .separator.large {
          width: 40px;
        }

        .thanks {
          text-align: center;
          line-height: 30px;
        }
      `}</style>
    </>
  );
};
