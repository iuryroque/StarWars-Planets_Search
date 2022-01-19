import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import Myprovider from './context/PlanetsProvider';

function App() {
  return (
    <Myprovider>
      <Header />
      <Table />
    </Myprovider>
  );
}

export default App;
