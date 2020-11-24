import React from 'react';

import SubSection from './subSection';

interface IProps {
  partners: string[];
}

const Partners: React.FC<IProps> = ({ partners }) => {
  return (
    <SubSection title="Partenaires">
      {partners ? (
        <ul>
          {partners.map(partner => (
            <li key={partner} className="item">
              {partner}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cette API ne recense pas ses partenariats publiquement.</p>
      )}
    </SubSection>
  );
};

export default Partners;
