import React from 'react';

import Section from './section';
import { ExternalLink } from '../../uiComponents';
import DatagouvWidget from '../widgets/datagouv';

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
      const response = await fetch(
        `https://www.data.gouv.fr/api/1/datasets/${uuid}`
      );
      const data = await response.json();
      if (!response.ok) {
        console.log(`----ERROR----`);
        console.log(`Incorrect response for dataset : ${uuid}`);
        console.log(`STATUS CODE : ${response.status}`);
        console.log(`BODY : ${JSON.stringify(data)}`);

        throw new Error(`Corrupted dataset uuid : ${uuid}`);
      }

      return {
        title: data.title,
        uuid,
        organization: data.organization.name,
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
          <DatagouvWidget
            title={item.title}
            key={item.title}
            productor={item.organization}
            href={`https://data.gouv.fr/fr/datasets/${item.uuid}`}
          />
        ))}
      </div>
      <style jsx>{`
        div > span {
          margin-right: 20px;
        }
        div.dataset-container {
          margin: 30px auto;
        }
      `}</style>
    </Section>
  );
};

export default ApiOpenDataSources;
