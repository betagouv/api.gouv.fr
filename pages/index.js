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
  publicRuntimeConfig.SITE_DESCRIPTION || "Le site qui simplifie le partage et la circulation des données administratives";

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
            className="nav__logo"
            src="/images/api.gouv.fr.svg"
            alt="Logo de api.gouv.fr"
          />
          <div className='baseline'>
            <h2 className="ui header">{SITE_DESCRIPTION}</h2>
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

        .header-with-image {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .header-with-image img {
          margin-bottom: 1em;
          width: 350px;
        }

        .baseline {
          max-width: 450px;
          text-align: center;
        }

        .baseline h2 {
          margin-bottom: 1.5em;
        }

        section {
          padding: 4em 0;
        }

        section#apis {
          background: ${colors.backgroundBlue};
        }

        @media (max-width: 768px) {
          #mission-statement {
            padding: 4em 2em;
          }

          .header-with-image img {
            width: 250px;
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
