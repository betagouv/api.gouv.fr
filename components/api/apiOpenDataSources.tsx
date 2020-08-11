import React from 'react';

import Section from './section';
import { ExternalLink } from '../../uiComponents';
import DatagouvWidget from '../widgets/datagouv';
import Emoji from '../../uiComponents/emoji';

export interface IDataGouvDataset {
  uuid: string;
  title: string;
  organization: string;
  logo: string;
  countResources: number;
  countReuse: number;
  countBookmark: number;
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
      return {
        title: data.title,
        uuid,
        organization: data.organization.name,
        logo: data.organization.logo_thumbnail,
        countResources: data.resources.length,
        countReuse: data.metrics.reuses,
        countBookmark: data.metrics.followers,
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
            productor={item.organization}
            href={`https://data.gouv.fr/fr/datasets/${item.uuid}`}
            logo={item.logo}
          >
            <div>
              <span title="Nombre de ressources">
                <Emoji emoji="📦" label="resources" />
                {item.countResources}
              </span>
              <span title="Nombre de réutilisations">
                <Emoji emoji="🏗" label="réutilisations" />
                {item.countReuse}
              </span>
              <span title="Nombre de favoris">
                <Emoji emoji="⭐️" label="favoris" />
                {item.countBookmark}
              </span>
            </div>
          </DatagouvWidget>
        ))}

        <div data-udata-dataset="56373ad988ee38438a531576"></div>
        <script
          data-udata="https://www.data.gouv.fr/"
          src="https://static.data.gouv.fr/static/oembed.js"
          async
          defer
        ></script>
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
