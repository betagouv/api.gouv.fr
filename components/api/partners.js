import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';

const Partners = ({ partners }) => {
  return (
    <Section id="partenaires" title="Partenaires">
      {partners ? (
        <ul className="ui list">
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

Partners.defaultProps = {
  partners: null,
};

Partners.propTypes = {
  partners: PropTypes.array,
};

export default Partners;
