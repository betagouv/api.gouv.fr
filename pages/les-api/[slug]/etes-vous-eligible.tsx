import React, { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';

import {
  getAPI,
  getAllAPIs,
  IAccessCondition,
  IAccessConditionWithVisitorType,
} from '../../../model';
import Page from '../../../layouts';

import { HEADER_PAGE } from '../../../components';

import { MultiChoice, ButtonLink } from '../../../uiComponents';

interface IAccessConditionOption extends IAccessCondition {
  label: string;
  value: string;
}

interface IProps {
  title: string;
  slug: string;
  accessConditionOptions: IAccessConditionOption[];
}

const AccessCondition: React.FC<IProps> = ({
  title,
  slug,
  accessConditionOptions,
}) => {
  const [visitorType, setVisitorType] = useState(null);

  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={`Condition d’accès à ${title}`}
      description={`${title} est une des APIs du service public. Découvrez ses conditions d’accès.}`}
      canonical={`https://api.gouv.fr/les-api/${slug}/etes-vous-eligible`}
      noIndex={true}
      usePreFooter={false}
    >
      <div className="text-wrapper text-style">
        <h1>Demande d’accès à {title}</h1>
        <p>
          <span role="img" aria-label="émoji clé">
            🔑
          </span>{' '}
          L’accès aux données de {title} nécessite une habilitation.
        </p>
        <p>
          Vérifions si vous êtes <b>éligibles</b>. Qui êtes-vous :
        </p>
        <MultiChoice
          multiChoiceOptions={accessConditionOptions}
          onClick={setVisitorType}
          selected={visitorType}
        />
        <div className="condition-details">
          {accessConditionOptions.map(condition => (
            <>
              {condition.value === visitorType && (
                <>
                  <ReactMarkdown source={condition.description} />
                  <div className="layout-center">
                    <ButtonLink href={condition.cta.path} large>
                      {condition.cta.label}
                    </ButtonLink>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      <style jsx>{`
        .condition-details {
          margin: 50px 0 150px;
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
  const accessConditionOptions = api.access_page.reduce(
    (
      accumulator: IAccessConditionOption[],
      condition: IAccessConditionWithVisitorType
    ) => {
      condition.who.forEach(type => {
        accumulator.push({
          label: type,
          value: type,
          description: condition.description,
          cta: condition.cta,
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
