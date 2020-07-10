import React from 'react';

import Section from './section';

const Partners = ({ partners }) => {
  return (
    <Section id="partenaires" title="Partenaires">
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
    </Section>
  );
};

export default Partners;
