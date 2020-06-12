import React from 'react';
import Link from 'next/link';

import { Unlock, Lock } from 'react-feather';

import { getUptimeState, roundUptime } from '../../utils/uptime';
import { textHighlighter, ISearchMatch } from './filtersLogic';
import constants from './../../constants';

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
