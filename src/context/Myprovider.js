import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './Mycontext';

function Myprovider({ children }) {
  const [planets, setPlanets] = useState([]);
  return (
    <MyContext.Provider value={ { planets, setPlanets } }>
      {children}
    </MyContext.Provider>
  );
}

Myprovider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Myprovider;
