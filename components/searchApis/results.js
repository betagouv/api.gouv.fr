import ApiCard from './apiCard';

const Results = ({ apiList }) => {
  return (
    <section id="api-results" className="page-body-container">
      <div className="fr-container">
        <div className="results-counter ">
          {apiList.length} résultat{apiList.length > 1 && 's'}
        </div>
        <div className="default-grid">
          {apiList.length > 0 ? (
            apiList.map(api => <ApiCard key={api.title} {...api} />)
          ) : (
            <div>
              <b>Aucun résultat trouvé pour la recherche.</b>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
