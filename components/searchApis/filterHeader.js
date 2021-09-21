import { SearchBar, Dropdown } from '../../uiComponents';

export const FilterHeader = ({
  search,
  setTheme,
  allThemesOptions,
  setAPIType,
  allAPITypeOptions,
  searchFromQueryString,
}) => (
  <section id="search-api-filters" className="fr-container ">
    <Dropdown
      label="Thématique"
      onChange={setTheme}
      selectOptions={allThemesOptions}
    />
    <Dropdown
      label="Type d’API"
      onChange={setAPIType}
      selectOptions={allAPITypeOptions}
      width={350}
    />
    <SearchBar
      onSearch={search}
      defaultValue={searchFromQueryString}
      placeholder="Recherchez un service, un ministère"
      label="Rechercher"
    />
  </section>
);

export default FilterHeader;
