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
