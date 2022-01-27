import React, { useState } from 'react';
import { getUptimeState, roundUptime } from '../../utils';
import SubSection from './subSection';
import constants from '../../constants';
import { ButtonLink } from '../../uiComponents';
import Speedometer from '../../uiComponents/icon/speedometer';
import Cardiogram from '../../uiComponents/icon/cardiogram';

interface IPropsRateLimiting {
  rate_limiting?: string;
  rate_limiting_resume?: string;
  rate_limiting_link?: string
}

interface IPropsMonitoring {
  uptime: number;
  monitoring?: string;
  monitoring_link?: string;
}

interface IPropsIsFranceConnected {
  is_france_connected: number | null;
}

interface IPropsDetails
  extends IPropsRateLimiting,
    IPropsMonitoring,
    IPropsIsFranceConnected {}

const ShowMore = ({ onClick = (isOpen: boolean) => {}, isOpen = false }) => {
  return (
    <>
      <button onClick={() => onClick(!isOpen)}>{isOpen ? '-' : '+'}</button>
      <style jsx>{`
        button {
          flex-grow: 0;
          flex-shrink: 0;
          border: none;
          background-color: ${constants.colors.lightBlue};
          color: ${constants.colors.blue};
          border-radius: 2px;
          padding: 4px 8px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};
const triggerOnEnterKey =
  (trigger: () => void) => (event: React.KeyboardEvent) => {
    if (!event.keyCode || (event && event.keyCode === 13)) {
      trigger();
    }
  };

const MonitoringDetail: React.FC<IPropsMonitoring> = ({
  uptime,
  monitoring,
  monitoring_link = null,
}) => {
  const [showMonitoringDesc, setShowMonitoringDesc] = useState(false);
  const toggle = () => setShowMonitoringDesc(!showMonitoringDesc);
  const toggleKey = triggerOnEnterKey(toggle);
  return (
    <>
      <div
        className="badge uptime cursor-pointer"
        onClick={toggle}
        onKeyDown={toggleKey}
        role="button"
        tabIndex={0}
      >
        {uptime ? (
          <>
            <div>
              <div className="uptime-stat" />
            </div>
            <div>
              Disponibilité : {roundUptime(2)(uptime)}% sur le dernier mois
            </div>
          </>
        ) : (
          <>
            <div>{Cardiogram}</div>
            <div>
              La disponibilité sur le dernier mois n'est pas communiquée
            </div>
          </>
        )}
        {(monitoring || monitoring_link) && (
          <ShowMore isOpen={showMonitoringDesc} />
        )}
      </div>
      {(monitoring || monitoring_link) && showMonitoringDesc && (
        <>
          <div className="details">
            <i>{monitoring}</i>
            {monitoring && monitoring_link && <br />}
            {monitoring_link && (
              <>
                <i>Le monitoring de cette API est accessible ici :</i>
                <div className="layout-right vertical-margin">
                  <ButtonLink
                    href={monitoring_link}
                    target="_blank"
                    rel="noopener"
                    alt
                  >
                    Accéder au monitoring
                  </ButtonLink>
                </div>
              </>
            )}
          </div>
        </>
      )}
      <style jsx>{`
        .uptime-stat {
          min-width: 15px;
          min-height: 15px;
          border-radius: 100%;
          margin: 0 7px;
          background-color: ${getUptimeState(uptime)};
        }
      `}</style>
    </>
  );
};

const RateLimitingDetail: React.FC<IPropsRateLimiting> = ({
  rate_limiting,
  rate_limiting_resume,
  rate_limiting_link
}) => {
  const [showRateLimitDesc, setShowRateLimitDesc] = useState(false);
  const toggle = () => setShowRateLimitDesc(!showRateLimitDesc);
  const toggleKey = triggerOnEnterKey(toggle);
  return (
    <>
      <div
        className="badge  cursor-pointer"
        onClick={toggle}
        onKeyDown={toggleKey}
        role="button"
        tabIndex={0}
      >
        <div>{Speedometer}</div>
        <div>
          {rate_limiting_resume
            ? `Limite : ${rate_limiting_resume}`
            : 'Les limites d’utilisation de cette API ne sont pas communiquées'}
        </div>
        {rate_limiting && <ShowMore isOpen={showRateLimitDesc} />}
      </div>
      {rate_limiting && showRateLimitDesc && (
        <div className="details">
          <i>{rate_limiting}</i>
          { rate_limiting_link &&
            <>
              <div className="layout-right vertical-margin">
                <ButtonLink
                  href={rate_limiting_link}
                  target="_blank"
                  rel="noopener"
                  alt
                >
                  En savoir plus
                </ButtonLink>
              </div>
            </>
          }
        </div>
      )}
    </>
  );
};

const IsFranceConnectedDetail: React.FC<IPropsIsFranceConnected> = ({
  is_france_connected,
}) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const toggleKey = triggerOnEnterKey(toggle);
  return (
    <>
      <div
        className="badge  cursor-pointer"
        onClick={toggle}
        onKeyDown={toggleKey}
        role="button"
        tabIndex={0}
      >
        <div>
          <img src="/images/divers/franceConnectLogo.png" alt="fc-logo" />
        </div>
        <div>
          FranceConnect :
          {is_france_connected === 2 ? ' obligatoire' : ' compatible'}
        </div>
        <ShowMore isOpen={show} />
      </div>
      {show && (
        <div className="details">
          {is_france_connected === 2 ? (
            <>
              Cette API fonctionne <b>obligatoirement</b> avec FranceConnect
              pour identifier les citoyen.
            </>
          ) : (
            <>
              Cette API fonctionne soit avec FranceConnect, soit sans
              FranceConnect.
            </>
          )}
          <br />
          <br />
          Pour en savoir, plus consultez{' '}
          <a href="/guides/api-franceconnectees">
            le guide des API FranceConnectée.
          </a>
        </div>
      )}
    </>
  );
};

const ApiDetails: React.FC<IPropsDetails> = ({
  uptime,
  monitoring,
  monitoring_link,
  rate_limiting,
  rate_limiting_resume,
  rate_limiting_link,
  is_france_connected = null,
}) => {
  return (
    <SubSection id="api-details-lateral-section" title="L’API en détail">
      <MonitoringDetail
        uptime={uptime}
        monitoring={monitoring}
        monitoring_link={monitoring_link}
      />
      <RateLimitingDetail
        rate_limiting={rate_limiting}
        rate_limiting_resume={rate_limiting_resume}
        rate_limiting_link={rate_limiting_link}
      />
      {(is_france_connected === 1 || is_france_connected === 2) && (
        <IsFranceConnectedDetail is_france_connected={is_france_connected} />
      )}
      <style global jsx>{`
        #api-details-lateral-section > .badge {
          display: inline-flex;
          align-items: center;
          margin: 4px 0;
          width: 100%;
        }

        #api-details-lateral-section > .badge > div:first-of-type {
          flex-shrink: 0;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #api-details-lateral-section > .badge > div:last-of-type {
          flex-grow: 1;
        }

        #api-details-lateral-section > .details {
          border-radius: 3px;
          background-color: ${constants.colors.lightBlue};
          padding: 5px 10px;
          font-size: 0.9rem;
          margin-bottom: 10px;
        }
      `}</style>
    </SubSection>
  );
};

export default ApiDetails;
