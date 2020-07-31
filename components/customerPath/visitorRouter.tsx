import React, { useState, useEffect } from 'react';
import { VISITOR } from './index';
import { SUBJECT } from './explanations';
import { Questions, Explanations } from './explanations';
import { MultiChoice } from '../../uiComponents';
import { logParcoursClient } from '../../utils/client/analytics';

interface IProps {
  visitor: VISITOR;
}

const VisitorRouter: React.FC<IProps> = ({ visitor }) => {
  const [subject, setSubject] = useState<SUBJECT | null>(null);

  const options = Questions.reduce((acc: any, element) => {
    if (element.public.indexOf(visitor) > -1) {
      acc.push(element);
    }
    return acc;
  }, []);

  useEffect(() => {
    setSubject(null);
  }, [visitor]);

  useEffect(() => {
    if (subject !== null) {
      logParcoursClient('3. Renseigne un sujet de question', SUBJECT[subject]);
    }
  }, [subject]);

  return (
    <>
      <div className="contact-form-question">
        <div className="question">Comment pouvons-nous vous aider ? </div>
        <MultiChoice
          onClick={setSubject}
          multiChoiceOptions={options}
          selected={subject}
        />
      </div>
      {subject !== null && (
        <Explanations subject={subject} visitorType={visitor} />
      )}
    </>
  );
};

export default VisitorRouter;
