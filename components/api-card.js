import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import getConfig from "next/config";
import LabelList from "./label-list";

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
              src={`/images/api-logo/${image || DEFAULT_LOGO}`}
              alt={image ? `logo de ${title}` : "logo générique api.gouv"}
            />

            <div className="header">{title}</div>
            <div className="meta">{owner}</div>

            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <LabelList title="Partenaires" labels={partners} />
            <LabelList title="Tags" labels={keywords} />
          </div>
        </a>
      </Link>
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
