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

interface IProps {
  apis?: IApi[];
  producer: IProducerElement;
}

const PageHeader: React.FC<{ title: string; logo: string }> = ({
  title,
  logo,
}) => (
  <section id="mission-statement">
    <div className="content-container">
      <div className="breadcrumb">
        <a href="/producteurs" className="dont-apply-link-style">
          ⇠ Tous les producteurs d'API
        </a>
      </div>
      <div className="content">
        <img src={`/images/api-logo/${logo}`} alt={`logo de ${title}`} />
        <h1>{title}</h1>
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

const API: React.FC<IProps> = ({ apis = [], producer }) => {
  return (
    <Page
      title={`Les APIs produites par ${producer.name}`}
      description={`Découvrez la liste des APIs produites par ${producer.name} dont certaines sont accessibles via api.gouv.fr`}
    >
      <PageHeader title={producer.name} logo={producer.logo} />
      <div id="description" className="content-container">
        <div className="default-grid">
          {apis.map(api => (
            <ApiCard key={api.title} {...api} />
          ))}
        </div>
      </div>
      <style jsx>{`
        #description {
          margin-bottom: 70px;
          margin-top: 50px;
        }

        .right-column-grid {
          display: grid;
          grid-template-columns: 65% 35%;
          grid-gap: 40px;
        }

        .info-column {
          border-left: 2px solid ${constants.colors.lightBlue};
          padding: 0 0 0 40px;
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
  return { props: { producer, apis } };
};

export default API;
