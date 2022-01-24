import React from 'react';
import Link from 'next/link';

import { getUptimeState, roundUptime } from '../../utils/uptime';
import { textHighlighter, ISearchMatch } from './filtersLogic';
import constants from './../../constants';
import { IIsApiOpen } from '../../model';

interface IProps {
  title: string;
  path: string;
  tagline: string;
  uptime: number;
  logo: string;
  is_open: IIsApiOpen;
  is_france_connected: number | null;
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
  is_france_connected = 0,
  matches = {},
}) => {
  return (
    <>
      <Link href="/les-api/[slug]" as={path}>
        <a className="api-card dont-apply-link-style">
          <div className="content">
            <img
              src={`/images/api-logo/${logo || constants.logo}`}
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

          {is_france_connected && is_france_connected > 0 ? (
            <div className="card-extra fc-compat">
              <img src="/images/divers/franceConnectLogo.png" alt="fc-logo" />
              <div>
                {is_france_connected === 2
                  ? ' S’utilise avec '
                  : ' Peut s’utiliser avec '}
                FranceConnect
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="card-extra">
            <div>
              <b>{owner.indexOf('&') > -1 ? 'Cop' : 'P'}roduit par :</b>{' '}
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
                {is_open !== -1 ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        fill={constants.colors.grey}
                        d="M29.3333 14H10.6667C9.19391 14 8 15.3838 8 17.0909V27.9091C8 29.6162 9.19391 31 10.6667 31H29.3333C30.8061 31 32 29.6162 32 27.9091V17.0909C32 15.3838 30.8061 14 29.3333 14Z"
                      />
                      <path
                        d="M2 14V8.66667C2 6.89856 2.70238 5.20286 3.95262 3.95262C5.20286 2.70238 6.89856 2 8.66667 2C10.4348 2 12.1305 2.70238 13.3807 3.95262C14.631 5.20286 15.3333 6.89856 15.3333 8.66667V14"
                        strokeWidth="3"
                        stroke={constants.colors.grey}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div>Accès libre</div>
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill={constants.colors.grey}
                        d="M25.3333 14H6.66667C5.19391 14 4 15.3838 4 17.0909V27.9091C4 29.6162 5.19391 31 6.66667 31H25.3333C26.8061 31 28 29.6162 28 27.9091V17.0909C28 15.3838 26.8061 14 25.3333 14Z"
                      />
                      <path
                        d="M9.33337 14V8.66667C9.33337 6.89856 10.0358 5.20286 11.286 3.95262C12.5362 2.70238 14.2319 2 16 2C17.7682 2 19.4638 2.70238 20.7141 3.95262C21.9643 5.20286 22.6667 6.89856 22.6667 8.66667V14"
                        stroke={constants.colors.grey}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

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
        .uptime-stat {
          width: 10px;
          height: 10px;
          border-radius: 100%;
          margin: 0 0.2em;
          background-color: ${getUptimeState(uptime)};
        }
        .card-extra.fc-compat > img {
          width: initial !important;
        }
      `}</style>
    </>
  );
};

export default ApiCard;
