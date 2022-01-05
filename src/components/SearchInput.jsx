import React, { useContext } from 'react';
import SearchContext from '../context/PlanetContext';

function SearchInput() {
  const { setSearch } = useContext(SearchContext);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Insira a pesquisa"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}
export default SearchInput;
