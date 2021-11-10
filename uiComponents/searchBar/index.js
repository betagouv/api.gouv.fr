import React, { useRef } from 'react';
import { debounce } from 'lodash';

const SearchBar = ({
  onSearch,
  placeholder,
  defaultValue = '',
  style = {},
  label = '',
  debounceRate = 100,
}) => {
  const searchInput = useRef(null);
  const onChange = debounce(() => {
    if (!searchInput || !searchInput.current) {
      return;
    }
    onSearch(searchInput.current.value);
  }, debounceRate);

  return (
    <>
      <div
        className="fr-search-bar"
        id="header-search"
        role="search"
        style={style}
      >
        {label && (
          <label className="fr-label" htmlFor="search-784-input">
            {label}
          </label>
        )}
        <input
          className="fr-input"
          type="search"
          id="search-784-input"
          name="search-784-input"
          placeholder={placeholder}
          onChange={onChange}
          ref={searchInput}
          defaultValue={defaultValue}
        />
        <button className="fr-btn" title="Rechercher" onClick={onChange}>
          Rechercher
        </button>
      </div>
    </>
  );
};

export default SearchBar;
