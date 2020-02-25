import React, { useEffect, useState } from 'react';

import FilterHeader from './filterHeader';
import Results from './results';
import {
  filterTheme,
  filterAccess,
  computeSearchResults,
} from './filtersLogic';

const SearchApis = ({ allApis, allThemes, searchFromQueryString = '' }) => {
  const [apiList, setApiList] = useState(allApis);

  const [theme, setTheme] = useState(null);
  const [isAccessOpen, setIsAccessOpen] = useState(false);
  const [searchTerms, setSearchTerms] = useState(searchFromQueryString);

  const allThemesOptions = allThemes.map((el, index) => {
    return { value: index, label: el };
  });

  useEffect(() => {
    let res = allApis;
    const cleanedSearchTerms = searchTerms.split(' ').filter(t => !!t);

    if (cleanedSearchTerms.length > 0) {
      res = allApis
        .map(computeSearchResults(cleanedSearchTerms))
        .filter(api => api.score !== 0);
    }

    const newApiList = res
      .filter(filterAccess(isAccessOpen))
      .filter(filterTheme(theme))
      .sort((a, b) => ((a.visits_2019 || 0) < b.visits_2019 ? 1 : -1));

    setApiList(newApiList);
    return () => {};
  }, [theme, isAccessOpen, searchTerms, allApis]);
  return (
    <>
      <FilterHeader
        allThemesOptions={allThemesOptions}
        setTheme={setTheme}
        setIsAccessOpen={setIsAccessOpen}
        search={setSearchTerms}
        searchFromQueryString={searchFromQueryString}
        isAccessOpen={isAccessOpen}
      />
      <Results apiList={apiList} />
    </>
  );
};

export default SearchApis;
