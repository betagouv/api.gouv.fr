import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import {
  IApi,
  getAllAPIs,
  getProducer,
  IProducerElement,
  getAllProducers,
} from '../../model';
import Page from '../../layouts';

import constants from '../../constants';
import ApiCard from '../../components/searchApis/apiCard';
import Markdown from 'markdown-to-jsx';
import Emoji from '../../uiComponents/emoji';

interface IProps {
  apis?: IApi[];
  partnerApis?: IApi[];
  producer: IProducerElement;
}

const PageHeader: React.FC<{ title: string; logo: string; acronym: string }> =
  ({ title, logo, acronym }) => (
    <section id="mission-statement">
      <div className="fr-container">
        <div className="breadcrumb">
          <a href="/producteurs" className="dont-apply-link-style">
            ⇠ Tous les producteurs d'API
          </a>
        </div>
        <div className="content">
          <img src={`/images/api-logo/${logo}`} alt={`logo de ${title}`} />
          <h1>
            {title} {acronym ? `(${acronym})` : ''}
          </h1>
        </div>
      </div>

      <style jsx>{`
        #mission-statement {
          background: ${constants.colors.backgroundBlueGradient};
          width: 100%;
          color: #fff;
          text-align: left;
        }

        .content {
          margin: 0;
          padding: 25px 0;
          display: flex;
          align-items: center;
        }

        .breadcrumb {
          padding-top: 25px;
        }
        .breadcrumb a {
          margin-top: 25px;
          color: #fff;
        }
        .breadcrumb:hover {
          text-decoration: underline;
        }

        h1 {
          margin: 0;
          margin-left: 15px;
          font-style: normal;
          font-weight: bold;
          color: #fff;
        }

        img {
          border-radius: 100px;
          width: 60px;
          height: 60px;
          object-fit: contain;
          background-color: #fff;
        }

        @media only screen and (min-width: 1px) and (max-width: 900px) {
          .content {
            padding: 0 0 10px;
          }
          .breadcrumb {
            padding-top: 10px;
          }
        }
      `}</style>
    </section>
  );

const ProducerPage: React.FC<IProps> = ({
  partnerApis = [],
  apis = [],
  producer,
}) => {
  const producerWithPronounSafe = producer.nameWithPronoun || producer.name;
  return (
    <Page
      title={`Les API produites par ${producer.name}`}
      description={`Découvrez la liste des API produites par ${producer.name} dont certaines sont accessibles via api.gouv.fr`}
    >
      <PageHeader
        title={producer.name}
        logo={producer.logo || constants.logo}
        acronym={producer.acronym}
      />
      {(producer.short || producer.description || producer.data) && (
        <div id="description" className="fr-container">
          <div className="right-column-grid">
            <div className="left-column text-style">
              {producer.short && (
                <>
                  <h2>Qu'est-ce que {producerWithPronounSafe} ?</h2>
                  <p>{producer.short}</p>
                </>
              )}
              {producer.description && (
                <>
                  <h2>Quelle est sa mission de service public ?</h2>
                  <Markdown>{producer.description}</Markdown>
                </>
              )}
              {producer.data && (
                <>
                  <h2>
                    Quelles données sont détenues par {producerWithPronounSafe}{' '}
                    ?
                  </h2>
                  <p>
                    Dans le cadre de sa mission {producerWithPronounSafe} a
                    notamment la charge des données suivantes :
                  </p>
                  <Markdown>{producer.data}</Markdown>
                </>
              )}
              <br />
            </div>
            <div className="right-column info-column">
              {(producer.contact ||
                producer.annuaire ||
                producer.siteAPI ||
                producer.siteOpenData) && (
                <div>
                  <h3>Contacter {producerWithPronounSafe}</h3>
                  {producer.annuaire && (
                    <>
                      <div>
                        <Emoji emoji="📖" label="annuaire" />
                        Consulter{' '}
                        <a href={producer.annuaire}>
                          sa page sur l'annuaire de l’administration.
                        </a>
                      </div>
                      <br />
                    </>
                  )}
                  {producer.contact && (
                    <>
                      <div>
                        <Emoji emoji="📝" label="formulaire" />
                        Écrire à l'équipe via le{' '}
                        <a href={producer.contact}>
                          formulaire de contact
                        </a>{' '}
                      </div>
                      <br />
                    </>
                  )}
                  {producer.siteOpenData && (
                    <>
                      <div>
                        <Emoji emoji="🧑‍💻" label="ordinateur" />
                        Consulter son{' '}
                        <a href={producer.siteOpenData}>
                          portail open-data
                        </a>{' '}
                      </div>
                      <br />
                    </>
                  )}
                  {producer.siteAPI && (
                    <>
                      <div>
                        <Emoji emoji="⚙️" label="rouage" />
                        Consulter son <a href={producer.siteAPI}>
                          portail API
                        </a>{' '}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div id="api-list">
        <div className="fr-container text-style">
          <h2>Quelles sont les API de {producerWithPronounSafe} ?</h2>
          {apis && apis.length > 0 && (
            <>
              <p>
                Actuellement {producerWithPronounSafe} publie et maintient{' '}
                <b>{apis.length} API :</b>
              </p>

              <div className="default-grid">
                {apis.map(api => (
                  <ApiCard key={api.title} {...api} />
                ))}
              </div>
            </>
          )}
          {partnerApis && partnerApis.length > 0 && (
            <>
              <p>
                {producerWithPronounSafe} est partenaire de{' '}
                <b>{partnerApis.length} API :</b>
              </p>

              <div className="default-grid">
                {partnerApis.map(api => (
                  <ApiCard key={api.title} {...api} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        #api-list {
          background-color: ${constants.colors.lightGrey};
          display: block;
          padding-bottom: 40px;
          padding-top: 30px;
        }

        .right-column-grid {
          display: grid;
          grid-template-columns: 65% 31%;
          grid-gap: 40px;
        }

        .info-column {
          border-left: 2px solid ${constants.colors.lightBlue};
          padding: 30px 0 0 40px;
        }
        @media only screen and (min-width: 1px) and (max-width: 900px) {
          .right-column-grid {
            display: flex;
            flex-direction: column-reverse;
          }
          .info-column {
            border: none;
            padding: 0;
          }
        }
      `}</style>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const producers = await getAllProducers();

  return {
    paths: producers.map(producer => {
      return {
        params: {
          slug: producer.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const slug = params.slug;

  //@ts-ignore
  const producer = await getProducer(slug);

  const allApis = await getAllAPIs();

  const apis = allApis.filter(api => api.producer === producer.slug);

  const partnerApis = allApis.filter(
    api =>
      (api.partners || []).map(partner => partner.slug).indexOf(producer.slug) >
      -1
  );

  return { props: { producer, apis, partnerApis } };
};

export default ProducerPage;
