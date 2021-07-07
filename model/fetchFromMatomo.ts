import { IApi } from '.';
import { getAllAPIs } from './readOnDiskForWebpack';

export interface IMatomoStat {
  title: string;
  path: string;
  visits: number;
  yes: number;
  no: number;
  approval: number;
}

export interface IMatomoResponseItem {
  label: string;
  nb_visits: number;
  subtable: {
    label: string;
    nb_events: number;
  }[];
}

const getDateRange = () => {
  const now = new Date();

  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();
  return `${year - 1}-${month}-${day},${year}-${month}-${day}`;
};

const extractStats = (
  matomoEvents: IMatomoResponseItem[],
  pagesStats: { [key: string]: number },
  rootPath: string,
  allApis?: IApi[]
) => {
  const stats = {} as { [key: string]: IMatomoStat };
  matomoEvents.forEach((elem: IMatomoResponseItem) => {
    const label = `page : ${rootPath}`;
    if (elem.label.indexOf(label) > -1) {
      const key = elem.label.replace(label, '');
      const visits = pagesStats['/' + key];
      const path = `${rootPath}${key}`;
      const title =
        ((allApis || []).find(api => api.slug === key) || {}).title || path;

      const yes =
        (elem.subtable.find(d => d.label === 'Oui') || {}).nb_events || 0;
      const no =
        (elem.subtable.find(d => d.label === 'Non') || {}).nb_events || 0;

      if (yes > 0 && no > 0) {
        const approval = Math.round((yes / (no + yes)) * 100);
        stats[key] = {
          title,
          path,
          visits,
          yes,
          no,
          approval,
        };
      }
    }
  });
  return Object.values(stats);
};

export const getMatomoStats = async () => {
  try {
    const allApis = await getAllAPIs();

    const [matomoEventsResponse, matomoPagesResponse] = await Promise.all([
      fetch(
        `https://stats.data.gouv.fr/index.php?&expanded=1&format=JSON&idSite=22&filter_limit=999&method=Events.getName&module=API&&period=range&date=${getDateRange()}`
      ),
      fetch(
        `https://stats.data.gouv.fr/index.php?&expanded=1&format=JSON&idSite=22&filter_limit=999&method=Actions.getPageUrls&module=API&period=range&date=${getDateRange()}`
      ),
    ]);

    const matomoPages = await matomoPagesResponse.json();
    const matomoEvents = await matomoEventsResponse.json();

    const pagesStats = matomoPages
      .filter(
        (elem: IMatomoResponseItem) =>
          ['guides', 'les-api'].indexOf(elem.label) > -1
      )
      .reduce((acc: IMatomoResponseItem[], elem: IMatomoResponseItem) => {
        return [...acc, ...elem.subtable];
      }, [])
      .reduce((acc: { [key: string]: number }, elem: IMatomoResponseItem) => {
        acc[elem.label] = elem.nb_visits;
        return acc;
      }, {});

    return {
      api: extractStats(matomoEvents, pagesStats, '/les-api/', allApis).sort(
        (a, b) => (a.visits < b.visits ? 1 : -1)
      ),
      guide: extractStats(matomoEvents, pagesStats, '/guides/'),
    };
  } catch (e) {
    return {
      api: null,
      guide: null,
    };
  }
};
