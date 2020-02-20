import Thumbnail from './thumbnail';

import { Lock, Unlock, Activity, Calendar, User, Sliders } from 'react-feather';

import { getUptimeState, roundUptime } from '../../../utils/uptime';

const Thumbnails = ({ is_open, uptime, lastUpdate, owner, rate_limiting }) => {
  return (
    <div className="content-container thumbnails">
      {is_open ? (
        <Thumbnail title="Accès" icon={<Unlock />}>
          API ouvert à tous
        </Thumbnail>
      ) : (
        <Thumbnail title="Accès" icon={<Lock />}>
          Sous habilitation
        </Thumbnail>
      )}
      {uptime && (
        <Thumbnail title="Disponibilité" icon={<Activity />}>
          <div className="badge uptime">
            <div className="uptime-stat" />
            {roundUptime(0)(uptime)}% actif / dernier mois
          </div>
        </Thumbnail>
      )}
      <Thumbnail title="Activité" icon={<Calendar />}>
        Dernière modification le {lastUpdate}
      </Thumbnail>
      <Thumbnail title="Producteur" icon={<User />}>
        {owner}
      </Thumbnail>
      {rate_limiting && (
        <Thumbnail title="Limite d’usage" icon={<Sliders />}>
          <div>
            {rate_limiting.split('/').map(rate => (
              <div className="rate" key={rate}>
                {rate}
              </div>
            ))}
          </div>
        </Thumbnail>
      )}

      <style jsx>{`
        .thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fit, 200px);
          justify-content: space-between;
          grid-gap: 1em;
          margin: 1em;
        }

        .badge {
          display: inline-flex;
          align-items: center;
        }

        .uptime-stat {
          min-width: 10px;
          min-height: 10px;
          border-radius: 100%;
          margin: 0 0.5em;
          background-color: ${getUptimeState(uptime)};
        }

        .rate:not(:first-child):before {
          content: '/ ';
        }

        @media (max-width: 445px) {
          .thumbnails {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Thumbnails;
