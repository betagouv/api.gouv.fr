import { useEffect, useState } from 'react';
import { getMatomoStats, IMatomoStat } from '../../model/fetchFromMatomo';
import Loader from '../../uiComponents/loader';

const MatomoStatsTable: React.FC<{}> = () => {
  const [matomoStats, setStats] = useState<IMatomoStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const stats = await getMatomoStats();
      setStats(stats);
      setIsLoading(false);
    };
    fetchStats();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader message="Téléchargement des statistiques en cours" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>API</th>
              <th>Visites</th>
              <th>Votes</th>
              <th>Note moyenne</th>
            </tr>
          </thead>
          <tbody>
            {matomoStats.map(lineStat => (
              <tr>
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
      )}
    </>
  );
};

export default MatomoStatsTable;
