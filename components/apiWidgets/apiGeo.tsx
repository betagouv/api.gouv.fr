import React, { useState } from 'react';

import SearchBar from '../../uiComponents/searchBar';
import constants from '../../constants';

const GeoWidget: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const search = (searchTerm: string) => {
    if (!searchTerm) {
      setResults([]);
    }

    setIsLoading(true);
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
          setIsLoading(false);
        }, 400)
      )
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="widget-wrapper layout-center">
      <div className="widget-label">Un exemple d’API ouverte : l’API Geo</div>
      <div>
        L’
        <a href="/les-api/api-geo">API Geo</a> permet notamment d'effectuer une
        recherche par nom des communes de France. Voila comment cela se passe :
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
          results={results}
          isLoading={isLoading}
        />
      </div>
      <style jsx>{`
        .widget-wrapper {
          background-color: ${constants.colors.lightBlue};
          flex-direction: column;
          padding: 50px;
          border-radius: 10px;
          position: relative;
          margin: 40px auto;
        }

        .widget-label {
          position: absolute;
          margin: 0;
          top: -15px;
          font-weight: bold;
          background-color: #fff;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          padding: 3px 10px;
        }

        p {
          text-align: center;
        }

        .interactive-component {
          min-width: 60%;
          background-color: #fff;
          box-shadow: 0 20px 30px 0px rgba(0, 0, 0, 0.2);
          padding: 20px 40px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default GeoWidget;
