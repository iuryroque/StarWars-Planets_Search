import React, { useContext, useEffect, useState } from 'react';
import SearchContext from '../context/PlanetContext';

// renomear negoço e coisa

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
    typeSort,
    setTypeSort,
    sort,
    setSort,
    change,
    setChange,
  } = useContext(SearchContext);
  const [typeList, setTypeList] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [filterList, setFilterList] = useState([]);
  const negoço = ['Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL'];

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

  const handleSort = () => {
    const MENOSUM = -1;
    function coisa(a, b) {
      if (sort === 'ASC') {
        return a[typeSort] > b[typeSort];
      }
      if (sort === 'DESC') {
        return b[typeSort] > a[typeSort];
      }
    }
    if (typeList.includes(typeSort)) {
      let newArray = [];
      if (sort === 'DESC') {
        newArray = planets.sort((a, b) => b[typeSort] - a[typeSort]);
      } else {
        newArray = planets.sort((a, b) => a[typeSort] - b[typeSort]);
      }
      setPlanets(newArray);
    } else {
      setPlanets(planets.sort((a, b) => {
        if (coisa(a, b)) {
          return 1;
        } if (coisa(b, a)) {
          return MENOSUM;
        }
        return 0;
      }));
    }
    setChange(!change);
  };
  useEffect(() => {
    handleSort();
  }, [planets]);
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
        <select
          data-testid="column-sort"
          onChange={ (e) => setTypeSort(e.target.value) }
        >
          {negoço.map((type, index) => (
            <option
              key={ `${type}__${index}` }
              value={ type.toLowerCase().replace(' ', '_') }
            >
              {type}
            </option>
          ))}
        </select>
        <label htmlFor="ASC">
          Ascendente
          <input
            type="radio"
            name="sort"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ (e) => setSort(e.target.value) }
          />
        </label>
        <label htmlFor="DESC">
          Descendente
          <input
            type="radio"
            name="sort"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ (e) => setSort(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleSort }
        >
          Ordenar
        </button>
      </form>
      { filterList && filterList.map((filter) => (
        <p data-testid="filter" key={ filter.filterType }>
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
