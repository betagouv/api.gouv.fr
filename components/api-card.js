import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

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
              src={`/static/images/api-logo/${image}`}
              alt={`logo de ${title}`}
            />

            <div className="header">{title}</div>
            <div className="meta">{owner}</div>

            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            {partners.length > 0 && (
              <>
                <small>Partenaires</small>
                <div>
                  {partners.map(partner => (
                    <div key={`${title}-${partner}`} className="ui tiny label">
                      {partner}
                    </div>
                  ))}
                </div>
              </>
            )}

            {keywords.length > 0 && (
              <>
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
              </>
            )}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .ui.tiny.label {
          margin-bottom: 2px;
        }
      `}</style>
    </>
  );
};

ApiCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  owner: PropTypes.string,
  tagline: PropTypes.string,
  partners: PropTypes.array,
  keywords: PropTypes.array
};

ApiCard.defaultProps = {
  image: null,
  partners: [],
  keywords: []
};

export default ApiCard;
