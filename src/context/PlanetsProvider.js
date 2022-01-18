import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './PlanetContext';

function PlanetsProvider({ children }) {
  const [planetsOriginal, setPlanetsOriginal] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [typeSort, setTypeSort] = useState('name');
  const [sort, setSort] = useState('ASC');
  const [change, setChange] = useState(false);
  return (
    <MyContext.Provider
      value={ {
        planets,
        setPlanets,
        search,
        setSearch,
        filterType,
        setFilterType,
        comparisonFilter,
        setComparisonFilter,
        valueFilter,
        setValueFilter,
        planetsOriginal,
        setPlanetsOriginal,
        typeSort,
        setTypeSort,
        sort,
        setSort,
        change,
        setChange,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
