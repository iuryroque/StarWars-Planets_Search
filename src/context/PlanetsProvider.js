import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './PlanetContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState('');
  return (
    <MyContext.Provider value={ { planets, setPlanets, search, setSearch } }>
      {children}
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
