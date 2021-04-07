import React from 'react';

import SubSection from './subSection';

interface IProps {
  partners: { slug?: string; name: string }[];
}

const Partners: React.FC<IProps> = ({ partners }) => {
  return (
    <SubSection title="Partenaires">
      {partners && partners.length > 0 ? (
        <ul>
          {partners.map(partner => (
            <li key={partner.name} className="item">
              {partner.slug ? (
                <a href={`/producteurs/${partner.slug}`}>{partner.name}</a>
              ) : (
                <>{partner.name}</>
              )}
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
