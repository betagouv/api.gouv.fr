import { useEffect, useState } from 'react';
import { getMatomoStats, IMatomoStat } from '../../model/fetchFromMatomo';
import Loader from '../../uiComponents/loader';

const MatomoTable: React.FC<{ matomoStats: IMatomoStat[]; category: string }> =
  ({ matomoStats, category }) => (
    <table>
      <thead>
        <tr>
          <th>{category}</th>
          <th>Visites</th>
          <th>Votes</th>
          <th>Note moyenne</th>
        </tr>
      </thead>
      <tbody>
        {matomoStats.map(lineStat => (
          <tr key={lineStat.path}>
            <td>
              <a href={lineStat.path}>{lineStat.title}</a>
            </td>
            <td>{lineStat.visits}</td>
            <td>{lineStat.yes + lineStat.no}</td>
            <td>{lineStat.approval}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

const MatomoStatsTable: React.FC<{}> = () => {
  const [matomoAPIStats, setAPIStats] = useState<IMatomoStat[] | null>();
  const [matomoGuideStats, setGuideStats] = useState<IMatomoStat[] | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const stats = await getMatomoStats();
      setAPIStats(stats.api);
      setGuideStats(stats.guide);
      setIsLoading(false);
    };
    fetchStats();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader message="Téléchargement des statistiques en cours" />
      ) : (
        <>
          {matomoAPIStats && matomoGuideStats ? (
            <>
              <MatomoTable category="Pages API" matomoStats={matomoAPIStats} />
              <br />
              <MatomoTable
                category="Pages guide"
                matomoStats={matomoGuideStats}
              />
            </>
          ) : (
            <i>
              Notre logiciel de statistiques est actuellement indisponible.
              Merci de réessayer ultérieurement.
            </i>
          )}
        </>
      )}
    </>
  );
};

export default MatomoStatsTable;
