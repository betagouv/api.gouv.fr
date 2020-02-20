import React from 'react';

import ApiCard from './apiCard';
import colors from '../../styles/colors';

const Results = ({ apiList }) => {
  return (
    <>
      <section id="api-results">
        <div className="content-container">
          <div className="results-counter">
            {apiList.length} résultat{apiList.length > 1 && 's'}
          </div>
          <div className="ui three stackable cards">
            {apiList.length > 0 ? (
              apiList.map(api => <ApiCard key={api.title} {...api} />)
            ) : (
              <div className="ui big warning message">
                <div className="header">Aucune API n’a pu être trouvée</div>
                Aucun résultat trouvé pour la recherche.
              </div>
            )}
          </div>
        </div>
      </section>
      <style jsx>
        {`
          section {
            padding: 35px 0 60px;
          }
          section#api-results {
            background: ${colors.lightGrey};
          }
          .results-counter {
            margin: 0 0 15px;
          }
        `}
      </style>
    </>
  );
};

export default Results;
