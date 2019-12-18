import React, { useState, useEffect } from "react";
import getConfig from "next/config";

import withErrors from "../components/hoc/with-errors";

import { getAllAPIs } from "../utils/api";

import Page from "../layouts/page";

import ApiCard from "../components/api-card";
import APISearchBar from "../components/api-search-bar";

import colors from "../styles/colors";

import { normaliseStr } from "../utils/normalize";

const { publicRuntimeConfig } = getConfig();
const SITE_DESCRIPTION =
  publicRuntimeConfig.SITE_DESCRIPTION || "Un accès unique aux API de l'État";

function Home({ q, filter, apiList }) {
  const [filteredList, setFilteredList] = useState(apiList);

  useEffect(() => {
    if (filter) {
      const filteredList = apiList.filter(api => {
        const normalizeKeywords = api.keywords.map(k => normaliseStr(k));
        return normalizeKeywords.includes(normaliseStr(filter));
      });

      setFilteredList(filteredList);
    }
  }, [filter]);

  return (
    <Page>
      <section id="mission-statement">
        <div className="header-with-image">
          <img
            className="ui small image"
            src="/static/images/Apigouv_visual.svg"
            alt="Une API connecte des services à la puissance d'internet"
          />

          <div>
            <h1 className="ui header">{SITE_DESCRIPTION}</h1>
            <APISearchBar q={q} list={apiList} />
          </div>
        </div>
      </section>

      <section id="apis">
        <div className="ui container">
          <div className="ui three stackable cards">
            {filteredList.length > 0 ? (
              filteredList.map(api => <ApiCard key={api.title} {...api} />)
            ) : (
              <div className="ui big warning message">
                <div className="header">Aucune API n’a pu être trouvée</div>
                Aucun résultat avec le filter: <b>{filter}</b>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        #mission-statement {
          padding-top: 4em;
          padding-bottom: 4em;
        }

        h1 {
          padding: 0.2em 0;
          font-size: 200%;
          line-height: 1.8;
        }

        .header-with-image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-with-image img {
          margin-right: 3em;
        }

        section {
          padding: 4em 0;
        }

        section#apis {
          background: ${colors.backgroundBlue};
        }

        @media (max-width: 768px) {
          .header-with-image {
            flex-direction: column;
          }

          #mission-statement {
            padding: 4em 2em;
          }

          #mission-statement .header-with-image img {
            width: 30%;
            margin: 0;
          }

          #mission-statement h1 {
            padding: 0 10px;
            margin-top: 10px;
            font-size: 1.3em;
          }
        }
      `}</style>
    </Page>
  );
}

Home.getInitialProps = async req => {
  const { q, filter } = req.query;
  const apiList = await getAllAPIs();

  return {
    q,
    filter,
    apiList
  };
};

export default withErrors(Home);
