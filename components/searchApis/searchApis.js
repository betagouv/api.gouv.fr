import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

import FilterHeader from './filterHeader';
import Results from './results';
import {
  API_ACCESS_TYPE,
  filterTheme,
  filterAccess,
  computeSearchResults,
} from './filtersLogic';

const logResultsInMatomo = debounce((search, theme, resultCounts) => {
  //@ts-ignore
  if (typeof window !== 'undefined' && window.Piwik) {
    //@ts-ignore
    const tracker = window.Piwik.getTracker(
      `${process.env.PIWIK_URL}/piwik.php`,
      process.env.PIWIK_SITE_ID
    );

    if (tracker) {
      tracker.trackSiteSearch(search, theme, resultCounts);
    }
  }
}, 1000);

const allAPITypeOptions = [
  { value: API_ACCESS_TYPE.OPEN, label: 'Les API ouvertes à tous' },
  { value: API_ACCESS_TYPE.NOT_OPEN, label: 'Les API en accès restreint' },
  {
    value: API_ACCESS_TYPE.FRANCE_CONNECT,
    label: 'Les API compatibles avec FranceConnect',
  },
];

const SearchApis = ({ allApis, allThemes }) => {
  const [apiList, setApiList] = useState(allApis);

  const [theme, setTheme] = useState(null);
  const [APIType, setAPIType] = useState(null);
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
      .filter(filterAccess(APIType))
      .filter(filterTheme(theme))
      .sort((a, b) => {
        //@ts-ignore
        if (a.score && b.score) {
          //@ts-ignore
          return b.score - a.score;
        }
        return (b.visits_2019 || 0) - (a.visits_2019 || 0);
      });

    const themeAndAccess = `${theme}${APIType || ''}`;

    logResultsInMatomo(searchTerms, themeAndAccess, newApiList.length);

    setApiList(newApiList);

    return () => {};
  }, [theme, APIType, searchTerms, allApis]);

  const updateTheme = index => {
    let idx;

    try {
      idx = parseInt(index, 10);
    } catch {
      idx = 0;
    }

    if (!!idx) {
      // no theme selected
      setTheme(null);
    }
    const newTheme = allThemesOptions.reduce((selectedTheme, theme) => {
      if (theme.value === idx) {
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
        allAPITypeOptions={allAPITypeOptions}
        setAPIType={setAPIType}
        search={setSearchTerms}
      />
      <Results apiList={apiList} />
    </>
  );
};

export default SearchApis;
