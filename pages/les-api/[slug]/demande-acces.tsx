import React, { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import RichReactMarkdown from '../../../components/richReactMarkdown';

import {
  getAPI,
  getAllAPIs,
  IAccessCondition,
  IAccessConditionWithVisitorType,
  ELIGIBLE,
} from '../../../model';
import Page from '../../../layouts';

import { HEADER_PAGE } from '../../../components';

import { MultiChoice, ButtonLink } from '../../../uiComponents';
import Loader from '../../../uiComponents/loader';
import { logDemanderAcces } from '../../../service/analytics';

interface IAccessConditionOption extends IAccessCondition {
  label: string;
  value: string;
}

interface IProps {
  title: string;
  slug: string;
  accessConditionOptions: IAccessConditionOption[];
  access_link?: string;
  access_description?: string;
  access_condition?: string;
  clients?: string[];
}

const IsEligible: React.FC<{ isEligible: ELIGIBLE }> = ({ isEligible }) => {
  switch (isEligible) {
    case ELIGIBLE.YES:
      return (
        <>
          Vous êtes éligible{' '}
          <span role="img" aria-label="émoji oui">
            👌
          </span>
        </>
      );
    case ELIGIBLE.MAYBE:
      return (
        <>
          Vous êtes peut-être éligible{' '}
          <span role="img" aria-label="émoji peut-etre">
            🧐
          </span>
        </>
      );
    default:
    case ELIGIBLE.NO:
      return (
        <>
          Désolé, vous n’êtes pas éligible{' '}
          <span role="img" aria-label="émoji non">
            🚫
          </span>
        </>
      );
  }
};

const AccessCondition: React.FC<IProps> = ({
  title,
  slug,
  accessConditionOptions,
  access_link,
  access_description,
  access_condition,
  clients,
}) => {
  const [visitorType, setVisitorType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateVisitorType = (visitorType: any) => {
    setIsLoading(true);
    setVisitorType(visitorType);

    window.setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={`Demande d’accès ${title}`}
      description={`${title} est une des APIs du service public. Découvrez ses conditions d’accès.`}
      canonical={`https://api.gouv.fr/les-api/${slug}/demande-acces`}
      noIndex={true}
      usePreFooter={false}
    >
      <div className="content-container">
        <div className="breadcrumb">
          <a href={`/les-api/${slug}`}>⇠ Fiche {title}</a>
        </div>
      </div>

      <div className="text-wrapper text-style">
        <h1>Demande d’accès {title}</h1>
        <p>
          <span role="img" aria-label="émoji clé">
            🔑
          </span>{' '}
          L’accès aux données de {title} nécessite une habilitation.
        </p>
        {accessConditionOptions ? (
          <>
            <p>
              Vérifions si vous êtes <b>éligible</b>. Qui êtes-vous :
            </p>
            <MultiChoice
              multiChoiceOptions={accessConditionOptions}
              onClick={updateVisitorType}
              selected={visitorType}
            />
            <div className="condition-details">
              {isLoading ? (
                <Loader />
              ) : (
                accessConditionOptions.map(condition => (
                  <React.Fragment key={condition.description}>
                    {condition.value === visitorType && (
                      <>
                        <h3>
                          <IsEligible isEligible={condition.is_eligible} />
                        </h3>
                        <RichReactMarkdown source={condition.description} />
                      </>
                    )}
                  </React.Fragment>
                ))
              )}
            </div>
          </>
        ) : (
          <div className="highlight-info">
            {access_description && (
              <div dangerouslySetInnerHTML={{ __html: access_description }} />
            )}

            {access_condition && access_condition === 'OUVERT sous contrat' ? (
              <div>
                <p>
                  L’API nécessite une habilitation, son accès est restreint aux
                  entités suivantes :
                </p>
                <ul>
                  {clients &&
                    clients.map(client => (
                      <li
                        key={client}
                        dangerouslySetInnerHTML={{ __html: client }}
                      />
                    ))}
                </ul>
              </div>
            ) : (
              <p>{access_condition}</p>
            )}
            <ButtonLink href={access_link} onClick={logDemanderAcces} large>
              <i className="icon key"></i>Demandez l'accès
            </ButtonLink>
          </div>
        )}
      </div>

      <style jsx>{`
        .condition-details {
          margin: 50px 0 150px;
        }
        .breadcrumb {
          margin-top: 25px;
        }
      `}</style>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const apis = await getAllAPIs();

  return {
    paths: apis
      .filter(api => !api.is_open)
      .map(api => {
        return {
          params: {
            slug: api.slug,
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
  const api = await getAPI(slug);

  if (!api.access_page) {
    const { access_link, access_description, access_condition, clients } = api;

    return {
      props: {
        title: api.title,
        slug: api.slug,
        access_link: access_link || null,
        access_description: access_description || null,
        access_condition: access_condition || null,
        clients: clients || [],
      },
    };
  }

  const accessConditionOptions = api.access_page.reduce(
    (
      accumulator: IAccessConditionOption[],
      condition: IAccessConditionWithVisitorType
    ) => {
      const { description, is_eligible } = condition;
      condition.who.forEach(type => {
        accumulator.push({
          label: type,
          value: type,
          description,
          is_eligible,
        });
      });
      return accumulator;
    },
    []
  );

  return {
    props: {
      title: api.title,
      slug: api.slug,
      accessConditionOptions,
    },
  };
};

export default AccessCondition;
