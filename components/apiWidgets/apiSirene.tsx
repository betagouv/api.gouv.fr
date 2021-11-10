import React, { useState } from 'react';

import SearchBar from '../../uiComponents/searchBar';
import { normalize } from '../../utils';
import ApiWidgetResults from './apiWidgetResults';
import ApiWidgetWrapper from './apiWidgetWrapper';

const ApiSireneWidget: React.FC<{ title: string }> = ({ title }) => {
  const [results, setResults] = useState<any[] | null>(null);

  const search = (searchTerm: string) => {
    if (!searchTerm) {
      setResults(null);
      return;
    }

    fetch(
      `https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${encodeURI(
        normalize(searchTerm)
      )}`
    )
      .then(response => response.json())
      .then(data =>
        window.setTimeout(() => {
          setResults(
            (data.etablissement || []).map((res: any) => (
              <>
                <div>
                  <b>{res.l1_normalisee}</b>
                </div>
                <div className="layout-space-between">
                  <i>{res.l4_normalisee}</i>
                  <i>{res.l6_normalisee}</i>
                </div>
                <br />
                <div>N° SIRET : {res.siret}</div>
                <br />
                <div>{res.libelle_activite_principale}</div>
              </>
            ))
          );
        }, 400)
      )
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <ApiWidgetWrapper title={title || 'Interroger l’API Sirene'}>
      <div>
        L’
        <a href="/les-api/sirene_v3">API Sirene</a> permet{' '}
        <b>à n'importe qui</b> d'effectuer une recherche sur les entreprises
        Françaises. Voila comment ca fonctionne :
      </div>
      <ol>
        <li>Vous tapez le nom d’une entreprise</li>
        <li>Votre ordinateur envoie ce nom à l’API Sirene</li>
        <li>
          L’API Sirene répond avec la liste des entreprises qui correspondent
        </li>
        <li>
          Votre ordinateur affiche les résultats (pas plus de 10, ceci est juste
          un démonstrateur)
        </li>
      </ol>
      <div className="interactive-component">
        <div className="layout-center">
          <SearchBar
            onSearch={search}
            placeholder="Tapez le nom d’une entreprise"
            label="Recherchez une entreprise française"
            debounceRate={200}
          />
        </div>
        <ApiWidgetResults results={results} />
      </div>
    </ApiWidgetWrapper>
  );
};

export default ApiSireneWidget;
