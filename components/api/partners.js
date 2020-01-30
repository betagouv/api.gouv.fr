import React from "react";
import PropTypes from "prop-types";

import ScrollableSection from "./scrollable-menu/scrollable-section";

const Partners = ({ partners, addRef }) => {
  return (
    <ScrollableSection id="partenaires" title="Partenaires" addRef={addRef}>
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
    </ScrollableSection>
  );
};

Partners.defaultProps = {
  partners: null
};

Partners.propTypes = {
  partners: PropTypes.array
};

export default Partners;
