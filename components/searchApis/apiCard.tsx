import React from 'react';
import Link from 'next/link';

import { Unlock, Lock } from 'react-feather';

import { getUptimeState, roundUptime } from '../../utils/uptime';

import { textHighlighter, ISearchMatch } from './filtersLogic';

const DEFAULT_LOGO = process.env.DEFAULT_LOGO || 'logo-beta-gouv.svg';

interface IProps {
  title: string;
  path: string;
  tagline: string;
  uptime: number;
  logo: string;
  is_open: boolean;
  owner: string;
  matches?: ISearchMatch;
}

const ApiCard: React.FC<IProps> = ({
  title,
  path,
  tagline = '',
  uptime = null,
  logo,
  owner,
  is_open,
  matches = {},
}) => {
  return (
    <>
      <Link href="/les-api/[slug]" as={path}>
        <a className="ui fluid card api-card dont-apply-link-style">
          <div className="content">
            <img
              className="right floated mini ui image"
              src={`/images/api-logo/${logo || DEFAULT_LOGO}`}
              alt={logo ? `logo de ${title}` : 'logo générique api.gouv'}
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
                __html: textHighlighter(matches.tagline, tagline),
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

          <div className="card-extra card-footer">
            <div className="badges">
              <div className="badge contract">
                {is_open ? (
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
              <div className="badge filler"></div>

              {uptime && (
                <div className="badge uptime">
                  <div className="uptime-stat" />
                  {roundUptime(2)(uptime)}% actif / dernier mois
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

        .card-footer {
          background-color: #fafafa;
          border-top: 1px solid #eaeaea;
          padding: 15px;
        }

        .badges {
          display: flex;
          align-items: center;
          flex-flow: wrap;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          font-size: small;
        }

        .badge.filler {
          flex-grow: 1;
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

export default ApiCard;
