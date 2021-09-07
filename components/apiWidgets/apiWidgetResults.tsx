import React from 'react';

const ApiWidgetResults: React.FC<{ results: any[] | null }> = ({ results }) => (
  <>
    {results && results.length > 0 && (
      <>
        <p className="layout-left">
          <b>Résultat(s) :</b>
        </p>
        <div className="results">
          {results.map(res => (
            <div key={res}>{res}</div>
          ))}
        </div>
      </>
    )}
    {results && results.length === 0 && (
      <>
        <br />
        <i>Pas de résultat</i>
      </>
    )}
  </>
);

export default ApiWidgetResults;
