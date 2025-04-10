import React, { useState } from 'react';
import Page from '../layouts/page';
import { HEADER_PAGE } from '../components';
import constants from '../constants';

const RechercherApi: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedQuery = encodeURIComponent(searchQuery);
    window.location.href = `https://www.data.gouv.fr/fr/dataservices/?q=${encodedQuery}`;
  };

  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      preFooterBackground={constants.colors.white}
      title="Rechercher une API du service public"
      description="Vous faites partie d'un ministère ou d'une collectivité et vous cherchez une API du service public ? Vous êtes au bon endroit."
    >
      <div className="deprecation-notice">
        <div className="search-container">
          <h1>Rechercher une API sur data.gouv.fr</h1>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher sur data.gouv.fr..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              Rechercher sur data.gouv.fr
            </button>
          </form>
        </div>

        <style jsx>{`
          .deprecation-notice {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }

          .search-container {
            text-align: center;
            margin-top: 2rem;
          }

          .search-form {
            display: flex;
            gap: 1rem;
            max-width: 600px;
            margin: 5rem auto;
          }

          .search-input {
            flex: 1;
            padding: 0.75rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }

          .search-button {
            padding: 0.75rem 1.5rem;
            background-color: #000091;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
          }

          .search-button:hover {
            background-color: #1212ff;
          }
        `}</style>
      </div>
    </Page>
  );
};

export default RechercherApi;
