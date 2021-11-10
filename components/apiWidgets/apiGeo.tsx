import React, { useState } from 'react';

import SearchBar from '../../uiComponents/searchBar';
import ApiWidgetWrapper from './apiWidgetWrapper';

const GeoWidget: React.FC<{}> = () => {
  const [results, setResults] = useState([]);

  const search = (searchTerm: string) => {
    if (!searchTerm) {
      setResults([]);
    }

    fetch(
      `https://geo.api.gouv.fr/communes?nom=${encodeURI(
        searchTerm
      )}&fields=departement&boost=population&limit=5`
    )
      .then(response => response.json())
      .then(data =>
        window.setTimeout(() => {
          setResults(
            data.map(
              (res: any) =>
                `${res.nom}, ${res.departement.nom} (${res.departement.code})`
            )
          );
        }, 400)
      )
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <ApiWidgetWrapper title="Un exemple d’API ouverte : l’API Geo">
      {console.log(results)}
      <div>
        L’
        <a href="/les-api/api-geo">API Geo</a> permet <b>à n'importe qui</b>{' '}
        d'effectuer une recherche par nom des communes de France. Voila comment
        cela se passe :
      </div>
      <ol>
        <li>Vous tapez le nom d’une commune</li>
        <li>Nous envoyons ce nom à l’API Geo</li>
        <li>L’API géo nous renvoie la liste des communes qui correspondent</li>
        <li>Nous affichons les résultats</li>
      </ol>
      <div className="interactive-component">
        <SearchBar
          onSearch={search}
          placeholder="Tapez le nom de votre commune"
          label="Recherchez une commune française"
          debounceRate={200}
        />
      </div>
    </ApiWidgetWrapper>
  );
};

export default GeoWidget;
