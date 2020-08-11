import React from 'react';

import Section from './section';
import { ExternalLink } from '../../uiComponents';
import FlatFileWidget from '../widgets/flatFile';

export interface IDataGouvDataset {
  uuid: string;
  title: string;
  organization: string;
}

/**
 * For a list of datagouv uuid, returns the uuid enriched with dataset informations such as title
 * @param uuids
 */
export const fetchDatagouvDatasets = async (
  uuids: string[]
): Promise<IDataGouvDataset[]> => {
  if (!uuids || uuids.length === 0) {
    return [];
  }
  return await Promise.all(
    uuids.map(async uuid => {
      const dataSetResponse = await fetch(
        `https://www.data.gouv.fr/api/1/datasets/${uuid}`
      );
      const dataSetData = await dataSetResponse.json();
      return {
        title: dataSetData.title,
        uuid,
        organization: dataSetData.organization.name,
      };
    })
  );
};

const ApiOpenDataSources: React.FC<{ datasetsList: IDataGouvDataset[] }> = ({
  datasetsList,
}) => {
  const uniq = datasetsList.length === 1;
  return (
    <Section id="api-open-data-sources" title="Source de données ouvertes">
      <div>
        Cette API se base sur{' '}
        {uniq
          ? 'un jeu de données ouvert, accessible'
          : 'plusieurs jeux de données ouverts, accessibles'}{' '}
        via{' '}
        <ExternalLink href="https://data.gouv.fr">data.gouv.fr</ExternalLink>
        &nbsp;:
      </div>
      <div className={`${uniq ? '' : 'two-column-grid'} dataset-container`}>
        {datasetsList.map(item => (
          <FlatFileWidget
            title={`${item.title}`}
            description={`Produit par : ${item.organization}`}
            href={`https://data.gouv.fr/fr/datasets/${item.uuid}`}
            label="Accéder au jeu de données"
          />
        ))}
      </div>
      <style jsx>{`
        div.dataset-container {
          margin: 30px auto;
        }
      `}</style>
    </Section>
  );
};

export default ApiOpenDataSources;
