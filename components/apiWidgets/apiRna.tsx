import React, { useState } from 'react';

import SearchBar from '../../uiComponents/searchBar';
import { normalize } from '../../utils';
import ApiWidgetResults from './apiWidgetResults';
import ApiWidgetWrapper from './apiWidgetWrapper';

const ApiRnaWidget: React.FC<{}> = () => {
  const [results, setResults] = useState<any[] | null>(null);

  const search = (searchTerm: string) => {
    if (!searchTerm) {
      setResults(null);
      return;
    }

    fetch(
      `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${encodeURI(
        normalize(searchTerm)
      )}`
    )
      .then(response => response.json())
      .then(data =>
        window.setTimeout(() => {
          setResults(
            (data.association || []).map((res: any) => (
              <>
                <div>
                  <b>{res.titre}</b>
                </div>
                <div className="layout-space-between">
                  <i>
                    {res.adresse_code_postal} {res.adresse_libelle_commune}
                  </i>
                  <i>n°RNA : {res.id_association}</i>
                </div>
                <div>{res.objet || ''}</div>
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
    <ApiWidgetWrapper title="Interroger l’API Répertoire National des Associations">
      <div>
        L’
        <a href="/les-api/api_rna">API RNA</a> permet <b>à n'importe qui</b>{' '}
        d'effectuer une recherche sur les associations Françaises. Voila comment
        ca fonctionne :
      </div>
      <ol>
        <li>Vous tapez le nom d’une association</li>
        <li>Votre ordinateur envoi ce nom à l’API RNA</li>
        <li>
          L’API RNA répond avec la liste des associations qui correspondent
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
            placeholder="Tapez le nom d’une association"
            label="Recherchez une association française"
            debounceRate={200}
          />
        </div>
        <ApiWidgetResults results={results} />
      </div>
    </ApiWidgetWrapper>
  );
};

export default ApiRnaWidget;
