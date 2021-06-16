import { getAllAPIs } from './readOnDiskForWebpack';

export interface IMatomoStat {
  title: string;
  path: string;
  visits: number;
  yes: number;
  no: number;
  approval: number;
}

export const getMatomoStats = async () => {
  const allApis = await getAllAPIs();
  const matomoStats = await (
    await fetch(
      'https://stats.data.gouv.fr/index.php?&expanded=1&filter_limit=50&format=JSON&idSite=22&method=Events.getName&module=API&period=year&date=2021-04-27'
    )
  ).json();

  const stats = {} as IMatomoStat[];
  matomoStats.forEach(elem => {
    if (elem.label.indexOf('page : /les-api/') > -1) {
      const key = elem.label.replace('page : /les-api/', '');

      const yes =
        (elem.subtable.find(d => d.label === 'Oui') || {}).nb_events || 0;
      const no =
        (elem.subtable.find(d => d.label === 'Non') || {}).nb_events || 0;

      if (yes > 0 && no > 0) {
        const approval = Math.round((yes / (no + yes)) * 100);
        stats[key] = {
          title: (allApis.find(api => api.slug === key) || {}).title,
          path: `/les-api/${key}`,
          visits: elem.nb_visits,
          yes,
          no,
          approval,
        };
      }
    }
  });
  return Object.values(stats);
};
