import React, { useContext, useState } from 'react';
import SearchContext from '../context/PlanetContext';

function SearchInput() {
  const { setSearch,
    setFilterType,
    setComparisonFilter,
    setValueFilter,
    filterType,
    comparisonFilter,
    valueFilter,
    planets,
    setPlanets,
  } = useContext(SearchContext);
  const [typeList, setTypeList] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    setPlanets(planets.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return Number(planet[filterType]) > valueFilter;
      } if (comparisonFilter === 'menor que') {
        return Number(planet[filterType]) < valueFilter;
      }
      return Number(planet[filterType]) === Number(valueFilter);
    }));
    setTypeList(typeList.filter((type) => type !== filterType));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Insira a pesquisa"
        data-testid="name-filter"
        onChange={ handleChange }
      />
      <form>
        <select
          onChange={ (e) => setFilterType(e.target.value) }
          data-testid="column-filter"
        >
          { typeList.map((type) => (
            <option key={ type } value={ type }>{ type }</option>
          ))}

        </select>
        <select
          onChange={ (e) => setComparisonFilter(e.target.value) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          value={ valueFilter }
          onChange={ (e) => setValueFilter(e.target.value) }
          type="number"
          data-testid="value-filter"
        />
        <button
          onClick={ handleClick }
          type="button"
          data-testid="button-filter"
        >
          butão
        </button>
      </form>
    </div>
  );
}
export default SearchInput;
