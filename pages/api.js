import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import getConfig from "next/config";
import ReactMarkdown from "react-markdown";

import { getAPI, getService } from "../utils/api";

import withErrors from "../components/hoc/with-errors";

import colors from "../styles/colors";

import Page from "../layouts/page";

import SwaggerUI from "../components/api/swagger";

import ServiceCard from "../components/service-card";

const MENU_OPTIONS = [
  {
    id: "access",
    label: "Accès"
  },
  {
    id: "contact",
    label: "Support"
  },
  {
    id: "monitoring",
    label: "Supervision"
  },
  {
    id: "partenaires",
    label: "Partenaires"
  },
  {
    id: "doc_tech",
    label: "Documentation technique"
  },
  {
    id: "rate_limiting",
    label: "Limite d'usage"
  }
];

const {
  publicRuntimeConfig: { DEFAULT_LOGO }
} = getConfig();

const API = ({ api, services }) => {
  const [stats, setStats] = useState(null);

  const {
    title,
    tagline,
    logo,
    stat,
    score: { detail },
    external_site,
    content,
    clients,
    contract,
    partners
  } = api;

  const contact_link = detail.contact ? detail.contact.link : null;
  const contact_description = detail.contact
    ? detail.contact.description
    : null;

  const doc_tech_link = detail.doc_tech ? detail.doc_tech.link : null;
  const doc_tech_external = detail.doc_tech ? detail.doc_tech.external : null;
  const doc_tech_description = detail.doc_tech
    ? detail.doc_tech.description
    : null;

  const access_open = detail.access ? detail.access.is_open : null;
  const access_link = detail.access ? detail.access.link : null;
  const access_description = detail.access ? detail.access.description : null;

  const monitoring_link = detail.monitoring ? detail.monitoring.link : null;
  const monitoring_description = detail.monitoring
    ? detail.monitoring.description
    : null;

  const rate_limiting_description = detail.rate_limiting
    ? detail.rate_limiting.description
    : null;

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
    <Page>
      <section
        id="mission-statement"
        className="ui vertical center aligned segment"
      >
        <div className="ui container">
          <div className="ui center aligned inverted header">
            <img
              src={`/static/images/api-logo/${logo || DEFAULT_LOGO}`}
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
      </section>

      <div className="ui stackable container menu">
        <Link href="#api-description">
          <a className="header item">Description</a>
        </Link>
        {MENU_OPTIONS.map(menu => (
          <div key={menu.id}>
            {detail[menu.id] || menu.id === "partenaires" ? (
              <Link href={`#${menu.id}`}>
                <a className="item">{menu.label}</a>
              </Link>
            ) : (
              <Link href={`#${menu.id}`}>
                <a className="item">
                  {menu.label}
                  <div className="ui grey mini label">Non renseigné</div>
                </a>
              </Link>
            )}
          </div>
        ))}

        <Link href="#services">
          <a className="item">Services</a>
        </Link>
      </div>

      <div id="description" className="ui container">
        <section id="api-description">
          <h2 className="ui dividing header">
            <Link href="#api-description">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Description
          </h2>

          <ReactMarkdown source={content} />
        </section>

        <section id="access">
          <h2 className="ui dividing header">
            <Link href="#access">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Accès
          </h2>

          {access_open ? (
            <p>L'API est ouverte sans conditions.</p>
          ) : access_link ? (
            <>
              {access_description && (
                <div dangerouslySetInnerHTML={{ __html: access_description }} />
              )}

              {contract && contract === "OUVERT sous contrat" ? (
                <>
                  <p>{contract} pour :</p>
                  <ul>
                    {clients.map(client => (
                      <li key={client}>{client}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>{contract}</p>
              )}
              <a className="large ui button" href={access_link}>
                <i className="icon key"></i>Demandez l'accès
              </a>
            </>
          ) : (
            <p>Accès à l'API non documenté</p>
          )}
        </section>

        <section id="contact">
          <h2 className="ui dividing header">
            <Link href="#contact">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Support
          </h2>

          {contact_description && (
            <div dangerouslySetInnerHTML={{ __html: contact_description }} />
          )}

          {contact_link ? (
            <>
              {contact_link.includes("@") ? (
                <>
                  <p>
                    Vous pouvez contacter le support de cette API par mail. .
                  </p>
                  <a
                    className="large ui button"
                    href={`mailto:${contact_link}?subject=Contact%20via%20api.gouv.fr`}
                  >
                    <i className="icon mail"></i> Envoyer un mail à{" "}
                    {contact_link}
                  </a>
                </>
              ) : (
                <>
                  <p>
                    Vous pouvez contacter le support de cette API en utilisant
                    un formulaire.
                  </p>
                  <a
                    className="large ui button"
                    href={contact_link}
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="icon linkify"></i> Accéder au formulaire de
                    contact
                  </a>
                </>
              )}
            </>
          ) : (
            <p>Le contact de cette API n'est pas disponible publiquement.</p>
          )}
        </section>

        <section id="monitoring">
          <h2 className="ui dividing header">
            <Link href="#monitoring">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Supervision
          </h2>

          {monitoring_description && (
            <div dangerouslySetInnerHTML={{ __html: monitoring_description }} />
          )}

          {monitoring_link ? (
            <>
              <p>Les moniteurs de cette API sont disponibles publiquement.</p>

              <a
                className="large ui button"
                href={monitoring_link}
                target="_blank"
                rel="noopener"
              >
                <i className="icon linkify"></i> Accéder au monitoring
              </a>
            </>
          ) : (
            <p>
              Les moniteurs de cette API ne sont pas disponibles publiquement.
            </p>
          )}
        </section>

        <section id="rate_limiting">
          <h2 className="ui dividing header">
            <Link href="#rate_limiting">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Limitations d'usage
          </h2>

          {rate_limiting_description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: rate_limiting_description
              }}
            />
          ) : (
            <p>
              Les limitations d'usage de cette API ne sont pas disponibles
              publiquement.
            </p>
          )}
        </section>

        <section id="partenaires">
          <h2 className="ui dividing header">
            <Link href="#partenaires">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Partenaires
          </h2>

          {partners ? (
            <ul className="ui list">
              {partners.map(partner => (
                <li key={partner} className="item">
                  {partner}
                </li>
              ))}
            </ul>
          ) : (
            <p>Cette API ne recense pas ses partenariats publiquement.</p>
          )}
        </section>

        <section id="doc_tech">
          <h2 className="ui dividing header">
            <Link href="#doc_tech">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Documentation technique
          </h2>

          {doc_tech_description && (
            <div dangerouslySetInnerHTML={{ __html: doc_tech_description }} />
          )}

          {doc_tech_link ? (
            <SwaggerUI url={doc_tech_link} />
          ) : (
            <p>
              Vous pouvez retrouver la documentation technique sur{" "}
              <a href={doc_tech_external} rel="noopener" target="_blank">
                le site de l'API
              </a>
            </p>
          )}
        </section>

        <section id="services" className="ui container">
          <h2 className="ui dividing header">
            <Link href="#services">
              <a aria-hidden="true" className="header-anchor">
                #
              </a>
            </Link>
            Services
          </h2>
          {services ? (
            <div className="ui three stackable cards">
              {services.map(service => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </div>
          ) : (
            <p>
              La liste des services utilisant cette API ne sont pas disponibles
              publiquement.
            </p>
          )}
        </section>
      </div>

      <style jsx>{`
        .section-title {
          font-size: 1.3em;
          border-bottom: 1px solid #289fdc;
        }

        section + section {
          margin-top: 2em;
        }

        a.header-anchor {
          font-size: 0.9em;
          float: left;
          margin-left: -0.87em;
          padding-right: 0.23em;
          opacity: 0;
          text-decoration: none;
        }

        h2:hover .header-anchor {
          opacity: 1;
        }

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

        #stat_value {
          font-size: 2em;
          margin-bottom: 0.7em;
        }

        #description .metadata {
          margin-top: -1em;
          z-index: -200;
        }

        #description .metadata ul {
          margin-top: 0.3em;
          margin-bottom: 0.6em;
        }

        #description .metadata ul.unstyled {
          list-style: none;
          padding-left: 15px;
        }

        #description .metadata .check.icon {
          color: green;
        }

        #description .metadata .warning.icon {
          color: indianred;
        }

        #description .ribbon {
          z-index: 200;
        }

        #description .logoWrapper {
          text-align: center;
        }

        #description .markdown-body {
          border: none;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
        }

        #validator {
          display: none;
        }

        #description .ui.statistic {
          display: block;
          margin-top: 0.8em;
          margin-bottom: 0.8em;
        }

        #description .ui.statistic > .value {
          font-size: 3rem !important;
        }

        #callToAction {
          margin-top: 3%;
          padding-top: 3%;
          padding-bottom: 2%;

          background: ${colors.backgroundBlue};
        }

        #services {
          margin-bottom: 3em;
        }

        .sub.header .stat {
          color: white;
          font-size: 1.4em;
          margin-top: 1em;
        }
      `}</style>
    </Page>
  );
};

API.defaultProps = {
  services: null
};

API.propTypes = {
  services: PropTypes.array,
  api: PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    stat: PropTypes.shape({
      url: PropTypes.string,
      path: PropTypes.array,
      label: PropTypes.string,
      lastXdays: PropTypes.number
    }),
    score: PropTypes.shape({
      detail: PropTypes.shape({
        contact: PropTypes.shape({
          link: PropTypes.string,
          description: PropTypes.string
        }),
        doc_tech: PropTypes.shape({
          link: PropTypes.string,
          external: PropTypes.string,
          description: PropTypes.string
        }),
        access: PropTypes.shape({
          is_open: PropTypes.bool,
          link: PropTypes.string,
          description: PropTypes.string
        }),
        monitoring: PropTypes.shape({
          link: PropTypes.string,
          description: PropTypes.string
        }),
        rate_limiting: PropTypes.shape({
          description: PropTypes.string
        })
      }).isRequired
    }).isRequired,
    content: PropTypes.string.isRequired,
    clients: PropTypes.array,
    contract: PropTypes.string,
    partners: PropTypes.array
  }).isRequired
};

API.getInitialProps = async ({ query }) => {
  const api = await getAPI(query.apiId);
  let services = null;

  if (api.services && api.services.length > 0) {
    services = await Promise.all(
      api.services.map(service => getService(service))
    );
  }

  return { api, services };
};

export default withErrors(API);
