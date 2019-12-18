import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const DEFAULT_LOGO =
  publicRuntimeConfig.DEFAULT_LOGO || "logo-generique-startup-carre.jpg";

const ApiCard = ({
  title,
  url,
  image,
  owner,
  description,
  partners,
  keywords
}) => {
  return (
    <>
      <Link href={url}>
        <a className="ui fluid card api-card">
          <div className="content">
            <img
              className="right floated mini ui image"
              src={`/static/images/api-logo/${image || DEFAULT_LOGO}`}
              alt={image ? `logo de ${title}` : "logo générique api.gouv"}
            />

            <div className="header">{title}</div>
            <div className="meta">{owner}</div>

            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            {partners.length > 0 && (
              <div className="labels">
                <small>Partenaires</small>
                <div>
                  {partners.map(partner => (
                    <div key={`${title}-${partner}`} className="ui tiny label">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {keywords.length > 0 && (
              <div className="labels">
                <small>Tags</small>
                <div>
                  {keywords.map(keyword => (
                    <div
                      key={`${title}-${keyword}`}
                      className="ui tiny label api-tag"
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .labels {
          display: flex;
          justify-content: flex-start;
          flex-flow: wrap;
          flex-direction: column;
        }

        .ui.tiny.label {
          margin: 1px;
        }
      `}</style>
    </>
  );
};

ApiCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  owner: PropTypes.string,
  tagline: PropTypes.string,
  partners: PropTypes.array,
  keywords: PropTypes.array
};

ApiCard.defaultProps = {
  description: null,
  image: null,
  partners: [],
  keywords: []
};

export default ApiCard;
