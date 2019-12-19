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
        <div className="ui center aligned inverted header">
          <img
            src={`/images/api-logo/${logo}`}
            alt={title}
            className="ui small bordered image"
          />
          <h1>{title}</h1>
          <div className="sub header">{tagline}</div>
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
          padding-top: 5%;
          padding-bottom: 5%;
          margin-bottom: 2%;
          background: ${colors.backgroundBlue};
        }

        #mission-statement h1 {
          margin: 0;
        }

        #mission-statement h2 {
          padding: 0.2em 0;
        }

        #mission-statement .large.ui.secondary.button {
          margin: 10px;
        }

        .sub.header .stat {
          color: white;
          font-size: 1.4em;
          margin-top: 1em;
        }

        #stat_value {
          font-size: 2em;
          margin-bottom: 0.7em;
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
