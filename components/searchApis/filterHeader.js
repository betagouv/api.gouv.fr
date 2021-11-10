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
      placeholder="Toutes les thématiques"
      selectOptions={allThemesOptions}
    />
    <Dropdown
      label="Modalité d’accès"
      onChange={setAPIType}
      placeholder="Tous les accès"
      selectOptions={allAPITypeOptions}
      width={350}
    />
    <SearchBar
      onSearch={search}
      style={{ marginTop: '10px', width: '400px', maxWidth: '100%' }}
      defaultValue={searchFromQueryString}
      placeholder="Recherchez un service, un ministère"
      label="Rechercher"
    />
  </section>
);

export default FilterHeader;
