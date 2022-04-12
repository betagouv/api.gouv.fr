import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import RichReactMarkdown from '../../../components/richReactMarkdown';
import { logParcoursDemandeAcces } from '../../../utils/client/analytics';

import {
  getAPI,
  getAllAPIs,
  IAccessCondition,
  IAccessConditionWithVisitorType,
  ELIGIBLE,
} from '../../../model';
import Page from '../../../layouts';

import { HEADER_PAGE } from '../../../components';

import { MultiChoice } from '../../../uiComponents';
import Loader from '../../../uiComponents/loader';

interface IAccessConditionOption extends IAccessCondition {
  label: string;
  value: string;
}

interface IProps {
  title: string;
  slug: string;
  accessConditionOptions: IAccessConditionOption[];
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
}) => {
  const [visitorType, setVisitorType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateVisitorType = (visitorType: any) => {
    setIsLoading(true);
    setVisitorType(visitorType);

    window.setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    if (visitorType === null) {
      logParcoursDemandeAcces('1. Commence le parcours client', title);
    }
  }, [title, visitorType]);

  useEffect(() => {
    if (visitorType !== null) {
      logParcoursDemandeAcces('2. Renseigne un statut de visiteur', title, visitorType);
    }
  }, [title, visitorType]);

  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={`Demande d’habilitation ${title}`}
      description={`${title} est une des APIs du service public. Découvrez ses conditions d’accès.`}
      canonical={`https://api.gouv.fr/les-api/${slug}/demande-acces`}
      noIndex={true}
      usePreFooter={false}
    >
      <div className="fr-container">
        <div className="breadcrumb">
          <a href={`/les-api/${slug}`}>⇠ Fiche {title}</a>
        </div>
      </div>

      <div className="text-wrapper text-style">
        <h1>Demande d’habilitation {title}</h1>
        <p>
          <span role="img" aria-label="émoji clé">
            🔑
          </span>{' '}
          L’accès aux données de {title} nécessite une habilitation.
        </p>
        {accessConditionOptions && (
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
      .filter(api => !!api.access_page)
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
    throw Error('Should not happen');
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
