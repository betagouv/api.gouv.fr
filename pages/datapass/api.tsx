import React from 'react';
import { GetStaticProps } from 'next';

import { getAllAPIs, IApi } from '../../model';
import Page from '../../layouts/page';
import { HEADER_PAGE } from '../../components';
import constants from '../../constants';
import { ButtonLink, ExternalLink } from '../../uiComponents';

interface IProps {
  signupApis: IApi[];
}

const SignupApis: React.FC<IProps> = ({ signupApis }) => {
  return (
    <Page
      headerKey={HEADER_PAGE.FROM_SIGNUP}
      noIndex={true}
      useFooter={false}
      usePreFooter={false}
      title="Nouvelle demande d’habilitation"
    >
      <section className="fr-container page-baseline">
        <h1>Effectuer une nouvelle demande d’habilitation</h1>
      </section>

      <section className="page-body-container">
        <div className="fr-container ">
          {signupApis.map(api => (
            <div key={api.title} className="api-card-datapass">
              <div className="pic layout-center">
                <img
                  src={`/images/api-logo/${api.logo || constants.logo}`}
                  alt={
                    api.logo
                      ? `logo de ${api.title}`
                      : 'logo générique api.gouv'
                  }
                />
              </div>
              <div className="content">
                <div>
                  <b>{api.title}</b>
                </div>

                <div className="description">
                  {api.tagline} (
                  <ExternalLink
                    href={`https://api.gouv.fr/les-api/${api.slug}`}
                  >
                    en savoir plus
                  </ExternalLink>
                  )
                </div>
              </div>
              <div className="cta layout-center">
                <ButtonLink
                  href={api.datapass_link || 'https://datapass.api.gouv.fr'}
                >
                  Remplir une demande
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .api-card-datapass {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 15px 0;
          padding: 15px 10px;
          background: #fff;
          text-decoration: none;
          border: none;
          border-radius: 0.28571429rem;
          overflow: hidden;

          text-decoration: none;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
          display: flex;
        }
        .api-card-datapass > .pic {
          width: 30px;
          margin: 0 20px;
          height: auto;
          flex-shrink: 0;
        }
        .api-card-datapass > .pic > img {
          width: 100%;
        }
        .api-card-datapass > .content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-right: 20px;
        }
        .api-card-datapass > .cta {
          flex-shrink: 0;
        }

        @media only screen and (min-width: 1px) and (max-width: 600px) {
          .api-card-datapass {
            flex-direction: column;
          }

          .api-card-datapass > .pic {
            width: 40px;
          }
          .api-card-datapass > .content {
            text-align: center;
            margin: 15px 10px;
          }
        }
      `}</style>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allApis = await getAllAPIs();

  const impot = {
    ...allApis.find(api => api.slug === 'impot-particulier'),
    title: 'API Impôt particulier via FranceConnect',
    datapass_link:
      'https://datapass.api.gouv.fr/api-impot-particulier-fc-sandbox',
  };

  return {
    props: {
      signupApis: [...allApis.filter(api => !!api.datapass_link), impot],
    },
  };
};

export default SignupApis;
