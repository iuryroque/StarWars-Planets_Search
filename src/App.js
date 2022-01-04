import React from 'react';
import Table from './components/Table';
import Myprovider from './context/Myprovider';

function App() {
  return (
    <Myprovider>
      <Table />
    </Myprovider>
  );
}

export default App;
