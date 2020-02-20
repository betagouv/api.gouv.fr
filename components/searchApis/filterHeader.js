import React from 'react';

import { SearchBar, Toggle, Dropdown } from '../../uiComponents';
import './filterHeaderStyles.scss';

export const FilterHeader = ({
  setFilterSearch,
  setFilterTheme,
  setFilterAccess,
  allThemesOptions,
}) => (
  <section id="search-api-filters" className="content-container ">
    <Dropdown
      label="Thématique"
      onChange={setFilterTheme}
      selectOptions={allThemesOptions}
    />
    <div className="habilitation-wrapper">
      <label>Habilitation</label>
      <div>
        <Toggle
          label="Uniquement les APIs ouvertes à tous"
          onChange={setFilterAccess}
        />
      </div>
    </div>
    <SearchBar
      onSearch={setFilterSearch}
      placeholder="Recherchez un service, un ministère"
      label="Rechercher"
      width={450}
    />
  </section>
);

export default FilterHeader;
