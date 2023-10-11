import React, { useState, useEffect } from 'react';

import { IApi } from '../../model';
import { SearchBar } from '../../uiComponents';

import Link from 'next/link';
import lock from '../../uiComponents/icon/lock';
import { computeSearchResults } from '../searchApis/filtersLogic';

interface IProps {
  allApis: IApi[];
}

const DocumentationLeftMenu: React.FC<IProps> = ({ allApis }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(allApis);

  useEffect(() => {
    let res = allApis;
    const cleanedSearchTerms = searchTerm.split(' ').filter(t => !!t);

    if (cleanedSearchTerms.length > 0) {
      res = res
        .map(computeSearchResults(cleanedSearchTerms))
        .filter(api => api.score !== 0);
    }

    const newApiList = res.sort((a, b) => {
      //@ts-ignore
      if (a.score && b.score) {
        //@ts-ignore
        return b.score - a.score;
      }
      return (b.visits_2019 || 0) - (a.visits_2019 || 0);
    });

    setResults(newApiList);

    return () => {};
  }, [searchTerm, allApis]);

  return (
    <div id="documentation-left-column">
      <div className="search-wrapper layout-center">
        <SearchBar placeholder="Rechercher une API" onSearch={setSearchTerm} />
      </div>
      <div className="documentation-api-list">
        {results.length === 0 ? (
          <div>Aucun résultat n'a été trouvé.</div>
        ) : (
          results.map(api => (
            <a
              href={`/documentation/${api.slug}`}
              key={api.slug}
            >
                <div className="api-title">
                  {api.title}{' '}
                  {!api.doc_tech_link && (
                    <span
                      title="Cette API ne propose pas de documentation au format Open API"
                      className="swagger-label"
                    >
                      Pas&nbsp;de&nbsp;swagger
                    </span>
                  )}
                </div>
                {api.is_open === -1 && (
                  <span
                    title="Cette API nécessite une habilitation"
                    className="is-open-label"
                  >
                    {lock}
                  </span>
                )}
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default DocumentationLeftMenu;
