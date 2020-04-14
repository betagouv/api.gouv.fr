import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';

import FilterHeader from './filterHeader';
import Results from './results';
import {
  filterTheme,
  filterAccess,
  computeSearchResults,
} from './filtersLogic';

const logResultsInMatomo = debounce((search, theme, resultCounts) => {
  if (window.Piwik) {
    const tracker = window.Piwik.getTracker(
      `${process.env.PIWIK_URL}/piwik.php`,
      process.env.PIWIK_SITE_ID
    );

    if (tracker) {
      tracker.trackSiteSearch(search, theme, resultCounts);
    }
  }
}, 1000);

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

    const themeAndAccess = `${theme}${isAccessOpen ? '-only-access-open' : ''}`;
    logResultsInMatomo(searchTerms, themeAndAccess, newApiList.length);

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
