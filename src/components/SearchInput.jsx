import React, { useContext, useEffect, useState } from 'react';
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
    planetsOriginal,
  } = useContext(SearchContext);
  const [typeList, setTypeList] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [filterList, setFilterList] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    setTypeList(typeList.filter((type) => type !== filterType));
    const objeto = { filterType, comparisonFilter, valueFilter };
    setFilterList([...filterList, objeto]);
  };

  const handleDelete = (filterToDelete) => {
    setFilterList(filterList.filter((filter) => filter.filterType !== filterToDelete));
    setPlanets(planetsOriginal);
  };

  // Feito com a ajuda de Ulisses e Leandro
  useEffect(() => {
    filterList.forEach((filters) => {
      setPlanets(planets.filter((planet) => {
        if (filters.comparisonFilter === 'maior que') {
          return Number(planet[filters.filterType]) > filters.valueFilter;
        } if (filters.comparisonFilter === 'menor que') {
          return Number(planet[filters.filterType]) < filters.valueFilter;
        }
        return Number(planet[filters.filterType]) === Number(filters.valueFilter);
      }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList]);
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
      { filterList && filterList.map((filter) => (
        <p key={ filter.filterType }>
          {
            `${filter.filterType}
         ${filter.comparisonFilter}
         ${filter.valueFilter}`
          }
          <button
            type="button"
            onClick={ () => handleDelete(filter.filterType) }
          >
            X

          </button>

        </p>)) }
    </div>
  );
}
export default SearchInput;
