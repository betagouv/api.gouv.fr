import React from "react";
import PropTypes from "prop-types";

import ServiceCard from "../service-card";

import ScrollableSection from "./scrollable-menu/scrollable-section";

const Services = ({ services, addRef }) => {
  return (
    <ScrollableSection id="services" title="Services" addRef={addRef}>
      <div className="ui container services-container">
        {services ? (
          <div className="ui three stackable cards">
            {services.map(service => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        ) : (
          <p>
            La liste des services utilisant cette API ne sont pas disponibles
            publiquement.
          </p>
        )}
      </div>

      <style jsx>{`
        .services-container {
          margin-bottom: 3em;
        }
      `}</style>
    </ScrollableSection>
  );
};

Services.defaultProps = {
  services: null
};

Services.propTypes = {
  services: PropTypes.array
};

export default Services;
