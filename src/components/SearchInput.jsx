import React, { useContext } from 'react';
import SearchContext from '../context/PlanetContext';

function SearchInput() {

  const { search, setSearch } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>texto do onChange "{search}"</h1>
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
