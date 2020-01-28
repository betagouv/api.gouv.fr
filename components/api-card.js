import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import getConfig from "next/config";

import { Unlock, Lock } from "react-feather";

import colors from "../styles/colors";

const { publicRuntimeConfig } = getConfig();
const DEFAULT_LOGO = publicRuntimeConfig.DEFAULT_LOGO || "logo-beta-gouv.svg";

const getUptimeState = uptime => {
  const {red, orange, green} = colors
  let color = red // Red

  if (uptime >= 98) {
    color = green; // Green
  } else if (uptime >= 90) {
    color = orange // Orange
  }

  return color
}

const ApiCard = ({
  title,
  url,
  contract,
  uptime,
  image,
  owner,
  description
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

            <div className="description">{description}</div>
          </div>

          <div className="card-extra">
            <div>
              <b>{owner.includes("&") ? "Cop" : "P"}roduit par :</b> {owner}
            </div>
          </div>

          <div className="card-extra">
            <div className="badges">
              <div className="badge contract">
                {contract === "OUVERT" ? (
                  <>
                    <Unlock size={20} />
                    <div>Accès libre</div>
                  </>
                ) : (
                  <>
                    <Lock size={20} />
                    <div>Sous habilitation</div>
                  </>
                )}
              </div>

              {uptime && (
                <div className="badge uptime">
                  <div className="uptime-stat" />
                  {uptime}% actif / dernier mois
                </div>
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

        .badges {
          display: flex;
          align-items: center;
          flex-flow: wrap;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          background-color: #ebeff3;
          padding: 0.4em;
          border-radius: 4px;
          margin: 0.2em;
          font-size: small;
        }

        .contract div {
          margin-left: 0.5em;
        }

        .uptime-stat {
          width: 10px;
          height: 10px;
          border-radius: 100%;
          margin: 0 0.2em;
          background-color: ${getUptimeState(uptime)};
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
  tagline: PropTypes.string,
  uptime: PropTypes.number
};

ApiCard.defaultProps = {
  description: null,
  image: null,
  uptime: null
};

export default ApiCard;
