import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import getConfig from 'next/config';

import { Unlock, Lock } from 'react-feather';

import { getUptimeState, roundUptime } from '../../utils/uptime';

import { textHighlighter } from './filtersLogic';

const { publicRuntimeConfig } = getConfig();
const DEFAULT_LOGO = publicRuntimeConfig.DEFAULT_LOGO || 'logo-beta-gouv.svg';

const ApiCard = ({
  title,
  url,
  contract,
  uptime,
  image,
  owner,
  description,
  matches = {},
}) => {
  return (
    <>
      <Link href={url}>
        <a className="ui fluid card api-card">
          <div className="content">
            <img
              className="right floated mini ui image"
              src={`/images/api-logo/${image || DEFAULT_LOGO}`}
              alt={image ? `logo de ${title}` : 'logo générique api.gouv'}
            />

            <div
              className="header"
              dangerouslySetInnerHTML={{
                __html: textHighlighter(matches.title, title),
              }}
            />

            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: textHighlighter(matches.description, description),
              }}
            />
          </div>

          <div className="card-extra">
            <div>
              <b>{owner.includes('&') ? 'Cop' : 'P'}roduit par :</b>{' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: textHighlighter(matches.owner, owner),
                }}
              />
            </div>
          </div>

          <div className="card-extra">
            <div className="badges">
              {contract !== 'OUVERT' && (
                <div className="badge contract">
                  <Lock size={20} />
                  <div>Sous habilitation</div>
                </div>
              )}

              {uptime && (
                <div className="badge uptime">
                  <div className="uptime-stat" />
                  {roundUptime(0)(uptime)}% actif / dernier mois
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        a.api-card {
          text-decoration: none;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1) !important;
          transition: transform 200ms ease-in-out !important,
            box-shadow 200ms ease-in-out !important;
        }

        a.api-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2) !important;
        }

        .api-card img {
          display: none;
        }
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
  contract: PropTypes.string,
  image: PropTypes.string,
  owner: PropTypes.string,
  tagline: PropTypes.string,
  uptime: PropTypes.number,
};

ApiCard.defaultProps = {
  description: null,
  image: null,
  uptime: null,
};

export default ApiCard;
