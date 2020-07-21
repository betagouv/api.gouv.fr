import React, { PropsWithChildren, useState } from 'react';

import { GetRFR, RecapRFR } from './steps';
import Loader from '../../../uiComponents/loader';

enum STEPS {
  CONNEXION = 1,
  RFR_FORM = 2,
  CONFIRM = 3,
  RECAP = 4,
}

export const StepsCarousel = () => {
  const [loadingMessage, setLoadingMessage] = useState('');
  const [step, setSteps] = useState<STEPS>(STEPS.RFR_FORM);

  const getRFR = () => {
    setLoadingMessage('Nous interrogeons le service des impôts');
    setSteps(STEPS.RECAP);
    window.setTimeout(() => setLoadingMessage(''), 1400);
  };

  return (
    <>
      {!!loadingMessage ? (
        <Loader message={loadingMessage} />
      ) : (
        <>
          {step === STEPS.RFR_FORM && <GetRFR next={getRFR} />}
          {step === STEPS.RECAP && <RecapRFR />}
        </>
      )}
    </>
  );
};

interface IPropsStepSection {
  title?: string;
}

export const StepSection: React.FC<PropsWithChildren<IPropsStepSection>> = ({
  title = '',
  children,
}) => (
  <>
    <div className="layout-center connexion-title">{title}</div>
    {children}
    <style jsx>{`
      .connexion-title {
        font-size: 1.3rem;
        line-height: 1.9rem;
        margin: 10px auto 20px;
        font-weight: bold;
      }
    `}</style>
  </>
);

export default StepsCarousel;
