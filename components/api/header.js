import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import colors from "../../styles/colors";

const Header = ({
  title,
  logo,
  tagline,
  stat,
  external_site,
  access_link,
  doc_tech_link,
  doc_tech_external
}) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      const result = await fetch(stat.url);
      const json = await result.json();
      const stats = stat.path ? json[stat.path[0]] : json;

      setStats(stats);
    };

    if (stat && stat.url) {
      getStats();
    }
  }, [stat]);

  return (
    <section
      id="mission-statement"
      className="ui vertical center aligned segment"
    >
      <div className="ui container">
        <div className="ui center aligned inverted header test">
          <div className='content'>
            <div className="title">
              <img
                src={`/images/api-logo/${logo}`}
                alt={title}
                className="ui image"
              />
              <h1>{title}</h1>
            </div>
            <div className="tagline">{tagline}</div>
            {stat && stat.url && (
              <div className="sub header">
                <div className="stat" id="stat_value">
                  {stats ? parseInt(stats).toLocaleString("fr-FR") : "-"}
                </div>
                {stat.label ? (
                  <>
                    {stat.label} lors des {stat.lastXdays} derniers jours
                  </>
                ) : (
                  <>appels lors des 30 derniers jours</>
                )}
              </div>
            )}
          </div>
        </div>

        {external_site && (
          <a className="large ui white button" href={external_site}>
            Voir le site
          </a>
        )}

        {access_link ? (
          <Link href={access_link}>
            <a className="large ui secondary button">Demandez l'accès</a>
          </Link>
        ) : doc_tech_link ? (
          <Link href="#doc_tech">
            <a className="large ui secondary button">
              Voir la documentation technique
            </a>
          </Link>
        ) : (
          <a className="large ui secondary button" href={doc_tech_external}>
            Voir la documentation technique
          </a>
        )}
      </div>

      <style jsx>{`
        #mission-statement {
          background: ${colors.backgroundBlue};
        }

        .sub.header .stat {
          color: white;
          font-size: 1.4em;
          margin-top: 1em;
        }

        #stat_value {
          margin-bottom: 0.7em;
        }

        .content {
          max-width: 400px;
        }

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1em;
        }

        .title img {
          border-radius: 100%;
          width: 48px;
          height: 48px;
        }

        .title h1 {
          font-family: Evolventa;
          margin: 0 0.5em;
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 43px;
          text-align: center;
        }

        .tagline {
          font-family: Evolventa;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
        }
      `}</style>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    url: PropTypes.string,
    path: PropTypes.array,
    label: PropTypes.string,
    lastXdays: PropTypes.number
  }),
  external_site: PropTypes.string.isRequired,
  access_link: PropTypes.string,
  doc_tech_link: PropTypes.string,
  doc_tech_external: PropTypes.string
};

export default Header;
