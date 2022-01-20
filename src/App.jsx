import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import Myprovider from './context/PlanetsProvider';
import './App.css';

function App() {
  return (

    <Myprovider>
      <div className="header">
        <Header />
      </div>
      <div className="table">
        <Table />
      </div>
    </Myprovider>
  );
}

export default App;
