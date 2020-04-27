import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

const Support = ({ contact_description, contact_link }) => {
  return (
    <Section id="contact" title="Support">
      <>
        {contact_description && (
          <div dangerouslySetInnerHTML={{ __html: contact_description }} />
        )}

        {contact_link ? (
          <>
            {contact_link.includes('@') ? (
              <>
                <p>Vous pouvez contacter le support de cette API par mail. .</p>
                <ButtonLink
                  className="large ui button"
                  href={`mailto:${contact_link}?subject=Contact%20via%20api.gouv.fr`}
                  alt
                  large
                >
                  <i className="icon mail"></i> Envoyer un mail à {contact_link}
                </ButtonLink>
              </>
            ) : (
              <>
                <p>
                  Vous pouvez contacter le support de cette API en utilisant un
                  formulaire.
                </p>
                <ButtonLink
                  href={contact_link}
                  target="_blank"
                  rel="noopener"
                  alt
                  large
                >
                  <i className="icon linkify"></i> Accéder au formulaire de
                  contact
                </ButtonLink>
              </>
            )}
          </>
        ) : (
          <p>Le contact de cette API n'est pas disponible publiquement.</p>
        )}
      </>
    </Section>
  );
};

Support.defaultProps = {
  contact_description: null,
  contact_link: null,
};

Support.propTypes = {
  contact_description: PropTypes.string,
  contact_link: PropTypes.string,
};

export default Support;
