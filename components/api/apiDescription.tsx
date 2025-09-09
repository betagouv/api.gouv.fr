import React, { useState } from 'react';

const ApiDescription: React.FC<{
  title: string;
}> = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState(title);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedQuery = encodeURIComponent(searchQuery);
    window.location.href = `https://www.data.gouv.fr/dataservices/search?q=${encodedQuery}`;
  };

  return (
    <div className="deprecation-notice">
      <div className="search-container">
        <h1>Rechercher "{title}" sur data.gouv.fr</h1>
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
  );
};

export default ApiDescription;
