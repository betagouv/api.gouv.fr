import React, { useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Search } from 'react-feather';

import constants from '../../constants';
import './searchBarStyles.scss';

const SearchBar = ({
  onSearch,
  placeholder,
  defaultValue,
  label,
  debounceRate = 100,
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
        {label && <label>{label}</label>}
        <div className={`search-bar ${focus ? 'focus' : ''}`}>
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
            <Search size={20} color={constants.colors.blue} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
