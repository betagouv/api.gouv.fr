import React, { useRef, useState } from 'react';
import { debounce } from 'lodash';

import { Search } from 'react-feather';
import colors from '../../styles/colors';

const SearchBar = ({
  onSearch,
  placeholder,
  label,
  debounceRate = 100,
  width = 400,
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
      <div className="search-wrapper">
        {label && <label>{label}</label>}
        <div className={`search-bar ${focus ? 'focus' : ''}`}>
          <input
            placeholder={placeholder}
            onChange={onChange}
            type="text"
            ref={searchInput}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <button onClick={onChange}>
            <Search size={20} color={colors.blue} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .search-wrapper {
          max-width: ${width}px;
          width: 100%;
        }
        label {
          line-height: 18px;
          font-weight: 600;
          color: ${colors.darkestGrey};
          font-size: 0.9rem;
        }
        .search-bar {
          font-size: 1.1rem;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          display: flex;
          padding: 0;
          transition: border-color 300ms ease-in-out;
        }

        .search-bar.focus {
          border-color: ${colors.blue};
        }

        input[type='text'] {
          line-height: 38px;
          padding: 0 10px;
          border: none;
          background: none;
          flex-grow: 1;
        }
        input[type='text']:focus {
          outline: none;
        }

        button {
          border: none;
          background: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button:hover {
          background-color: #eee;
        }
      `}</style>
    </>
  );
};

export default SearchBar;
