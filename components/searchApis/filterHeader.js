import React from 'react';

import { SearchBar, Toggle, Dropdown } from '../../uiComponents';
import './filterHeaderStyles.scss';

export const FilterHeader = ({
  search,
  setTheme,
  setIsAccessOpen,
  isAccessOpen,
  allThemesOptions,
  searchFromQueryString,
}) => (
  <section id="search-api-filters" className="content-container ">
    <Dropdown
      label="Thématique"
      onChange={setTheme}
      selectOptions={allThemesOptions}
    />
    <div className="habilitation-wrapper">
      <div className="label">Habilitation</div>
      <div className="toggle">
        <Toggle
          label="Uniquement les APIs ouvertes à tous"
          onChange={setIsAccessOpen}
          isToggled={isAccessOpen}
        />
      </div>
    </div>
    <SearchBar
      onSearch={search}
      defaultValue={searchFromQueryString}
      placeholder="Recherchez un service, un ministère"
      label="Rechercher"
      width={450}
    />
  </section>
);

export default FilterHeader;
