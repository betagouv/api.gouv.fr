import React, { useRef, useState } from 'react';

import constants from '../../constants';
import { ButtonLink } from '../../uiComponents';
import Emoji from '../../uiComponents/emoji';
import { logFeedback, logFeedbackDetails } from '../../utils/client/analytics';

const Feedback = () => {
  const [hasAnswered, setHasAnswered] = useState<-1 | 0 | 1>(-1);
  const [hasAnsweredDetails, setHasAnsweredDetails] = useState(false);
  const refDetails = useRef(null);

  const answer = (yesOrNo: Boolean) => {
    setHasAnswered(yesOrNo ? 1 : 0);
    // send to matomo
    logFeedback(yesOrNo ? 'Oui' : 'Non');
  };

  const answerDetails = () => {
    if (!refDetails || !refDetails.current) {
      return;
    }
    //@ts-ignore
    const details = refDetails.current.value;
    setHasAnsweredDetails(true);
    // send to matomo
    logFeedbackDetails(`${window.location.pathname} - ${details}`);
  };

  return (
    <>
      <div id="feedback-widget">
        {hasAnswered === -1 ? (
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
            {hasAnswered === 0 && !hasAnsweredDetails && (
              <form id="contact-form" onSubmit={answerDetails}>
                <label htmlFor="question">
                  Pouvez-vous nous en dire plus sur ce qui vous a posé problème
                  ?
                </label>
                <textarea
                  id="description"
                  placeholder="Détaillez ici votre réponse"
                  ref={refDetails}
                  required
                />
                <div className="submit layout-center">
                  <ButtonLink type="submit" size="large">
                    Envoyer
                  </ButtonLink>
                </div>
              </form>
            )}
            {hasAnsweredDetails && <Emoji emoji="🙂" label="merci" />}
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
export default Feedback;
