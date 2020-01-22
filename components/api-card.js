import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import getConfig from "next/config";

import { Unlock, Lock } from "react-feather";

const { publicRuntimeConfig } = getConfig();
const DEFAULT_LOGO =
  publicRuntimeConfig.DEFAULT_LOGO || "logo-generique-startup-carre.jpg";

const ApiCard = ({ title, url, contract, image, owner, description }) => {
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

            <div className="description">{description}</div>
          </div>

          <div className="card-extra">
            <div>
              <b>{owner.includes("&") ? "Cop" : "P"}roduit par :</b> {owner}
            </div>
          </div>

          <div className="card-extra">
            <div className="contract">
              {contract === "OUVERT" ? (
                <>
                  <Unlock />
                  <div>Accès libre</div>
                </>
              ) : (
                <>
                  <Lock />
                  <div>Sous habilitation</div>
                </>
              )}
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .card-extra {
          padding: 0.5em 1em;
          color: #222;
        }

        .contract {
          display: inline-flex;
          align-items: center;
          background-color: #ebeff3;
          padding: 0.4em;
          border-radius: 4px;
        }

        .contract div {
          margin-left: 0.5em;
        }
      `}</style>
    </>
  );
};

ApiCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  contract: PropTypes.string.isRequired,
  image: PropTypes.string,
  owner: PropTypes.string,
  tagline: PropTypes.string
};

ApiCard.defaultProps = {
  description: null,
  image: null
};

export default ApiCard;
