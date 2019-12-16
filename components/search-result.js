import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const SearchResult = ({ api }) => {
  return (
    <Link href={api.url}>
      <a className="result">
        <div className="image">
          <img src={`/static/images/api-logo/${api.image}`} />
        </div>
        <div className="content">
          <div className="title">{api.title}</div>
          <div className="description">{api.description}</div>
          {api.keywords && (
            <div className="keywords" hidden={true}>
              <ul>
                {api.keywords.map(keyword => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>
          )}
          {api.partners && (
            <div className="partners" hidden={true}>
              <ul>
                {api.partners.map(partner => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

SearchResult.protoTypes = {
  api: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.array.isRequired,
    partners: PropTypes.array.isRequired
  }).isRequired
};

export default SearchResult;
