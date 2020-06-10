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
                  <span className="swagger-label">OAS</span>
                )}
                {!api.is_open && (
                  <span className="is-open-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        fill="white"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </span>
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
