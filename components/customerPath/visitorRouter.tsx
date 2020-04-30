import React from 'react';
import { VISITOR, Individuals, Companies, Public } from './index';

interface IProps {
  visitor: VISITOR;
}

const VisitorRouter: React.FC<IProps> = ({ visitor }) => {
  switch (visitor) {
    case VISITOR.ADMINISTRATION:
    case VISITOR.EDITOR:
      return <Public />;
    case VISITOR.ENTREPRISE:
      return <Companies />;
    case VISITOR.PARTICULIER:
    default:
      return <Individuals />;
  }
};

export default VisitorRouter;
