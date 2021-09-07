import React, { useRef, useState } from 'react';
import { debounce } from 'lodash';

import Loader from '../loader';
import MagnifyingGlass from '../icon/magnifyingGlass';

const SearchBar = ({
  onSearch,
  placeholder,
  defaultValue = '',
  label = '',
  debounceRate = 100,
  results = [],
  isLoading = false,
}) => {
  const [focus, setFocus] = useState(false);
  const searchInput = useRef(null);
  const onChange = debounce(() => {
    if (!searchInput || !searchInput.current) {
      return;
    }
    onSearch(searchInput.current.value);
  }, debounceRate);

  return (
    <>
      <div id="search-wrapper">
        {label && <label htmlFor="search-input">{label}</label>}
        <div id="search-input" className={`search-bar ${focus ? 'focus' : ''}`}>
          <input
            placeholder={placeholder}
            onChange={onChange}
            type="text"
            ref={searchInput}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            defaultValue={defaultValue}
          />
          <button onClick={onChange}>
            {isLoading ? <Loader small /> : <MagnifyingGlass />}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
