import React, { useState, useEffect } from 'react';

import { IApi } from '../../model';
import { SearchBar } from '../../uiComponents';

import Link from 'next/link';

interface IProps {
  allApis: IApi[];
}

const DocumentationLeftMenu: React.FC<IProps> = ({ allApis }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(allApis);

  useEffect(() => {
    if (!searchTerm) {
      setResults(allApis);
    } else {
      const searchTermLower = searchTerm.toLowerCase();
      const newResults = allApis.reduce((matchingApis, api) => {
        if (api.title.toLowerCase().indexOf(searchTermLower) > -1) {
          //@ts-ignore
          matchingApis.push(api);
        }
        return matchingApis;
      }, []);
      setResults(newResults);
    }
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
            <Link
              href="/documentation/[slug]"
              as={`/documentation/${api.slug}`}
              key={api.slug}
            >
              <a>
                {api.title}
                {api.doc_tech_link && (
                  <span className="swagger-label">swagger</span>
                )}
              </a>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default DocumentationLeftMenu;
