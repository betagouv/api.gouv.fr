import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

import FilterHeader from './filterHeader';
import Results from './results';
import {
  filterTheme,
  filterAccess,
  computeSearchResults,
} from './filtersLogic';

import constants from '../../constants';

const logResultsInMatomo = debounce((search, theme, resultCounts) => {
  //@ts-ignore
  if (typeof window !== 'undefined' && window.Piwik) {
    //@ts-ignore
    const tracker = window.Piwik.getTracker(
      `${constants.links.PIWIK.URL}/piwik.php`,
      constants.links.PIWIK.SITE_ID
    );

    if (tracker) {
      tracker.trackSiteSearch(search, theme, resultCounts);
    }
  }
}, 1000);

const SearchApis = ({ allApis, allThemes }) => {
  const [apiList, setApiList] = useState(allApis);

  const [theme, setTheme] = useState(null);
  const [isAccessOpen, setIsAccessOpen] = useState(false);
  const [searchTerms, setSearchTerms] = useState('');

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
      .sort((a, b) => ((a.visits_2019 || 0) < (b.visits_2019 || 0) ? 1 : -1));

    const themeAndAccess = `${theme}${isAccessOpen ? '-only-access-open' : ''}`;

    logResultsInMatomo(searchTerms, themeAndAccess, newApiList.length);

    setApiList(newApiList);

    return () => {};
  }, [theme, isAccessOpen, searchTerms, allApis]);

  const updateTheme = index => {
    if (!!index) {
      // no theme selected
      setTheme(null);
    }
    const newTheme = allThemesOptions.reduce((selectedTheme, theme) => {
      if (theme.value === index) {
        return theme.label;
      }
      return selectedTheme;
    }, null);
    setTheme(newTheme);
  };

  return (
    <>
      <FilterHeader
        allThemesOptions={allThemesOptions}
        setTheme={updateTheme}
        setIsAccessOpen={setIsAccessOpen}
        search={setSearchTerms}
        isAccessOpen={isAccessOpen}
      />
      <Results apiList={apiList} />
    </>
  );
};

export default SearchApis;
