import React from "react";
import getConfig from "next/config";
import { orderBy } from "lodash";

import withErrors from "../components/hoc/with-errors";

import { getAllAPIs } from "../utils/api";

import Page from "../layouts/page";

import ApiCard from "../components/api-card";
import APISearchBar from "../components/api-search-bar";
import ButtonLink from "../components/ui/button-link";

import colors from "../styles/colors";

import { normaliseStr } from "../utils/normalize";

const { publicRuntimeConfig } = getConfig();
const SITE_DESCRIPTION =
  publicRuntimeConfig.SITE_DESCRIPTION ||
  "Le site qui simplifie le partage et la circulation des données administratives";

const filterAPI = (list, filter) => {
  let filteredList = list;

  if (filter) {
    filteredList = list.filter(api => {
      const normalizeKeywords = api.keywords.map(k => normaliseStr(k));
      return normalizeKeywords.includes(normaliseStr(filter));
    });
  }

  return filteredList;
};

function Home({ q, filter, apiList }) {
  const filteredList = filterAPI(apiList, filter);

  return (
    <Page>
      <section id="mission-statement">
        <div className="header-with-image">
          <img
            className="nav__logo"
            src="/images/api.gouv.fr.svg"
            alt="Logo de api.gouv.fr"
          />
          <div className="baseline">
            <h2 className="ui header">{SITE_DESCRIPTION}</h2>
            <APISearchBar q={q} list={apiList} />
          </div>
        </div>
      </section>

      <section id="apis">
        <div className="ui container">
          <div className="ui three stackable cards">
            {filteredList.length > 0 ? (
              orderBy(
                filteredList,
                [api => api.visits_2019 || 0],
                ["desc"]
              ).map(api => <ApiCard key={api.title} {...api} />)
            ) : (
              <div className="ui big warning message">
                <div className="header">Aucune API n’a pu être trouvée</div>
                Aucun résultat avec le filter: <b>{filter}</b>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="ui container links">
          <div>
            <h3>Vous ne trouvez pas l’API dont vous avez besoin ?</h3>
            <ButtonLink href="mailto:contact@api.gouv.fr?subject=Demande%20d%27une%20nouvelle%20API">
              Demander une API
            </ButtonLink>
          </div>
          <div>
            <h3>Vous voulez partager une API ?</h3>
            <ButtonLink
              href="https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-une-api"
              alt
            >
              Partager votre API
            </ButtonLink>
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

        .baseline h2 {
          margin-bottom: 1.5em;
          max-width: 450px;
          text-align: center;
        }

        section {
          padding: 4em 0;
        }

        section#apis {
          background: ${colors.backgroundBlue};
        }

        .links {
          display: flex;
          justify-content: space-between;
          flex-flow: wrap;
        }

        @media (max-width: 768px) {
          #mission-statement {
            padding: 4em 2em;
          }

          .header-with-image img {
            width: 250px;
          }

          .links > div:first-child {
            margin-bottom: 2em;
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
