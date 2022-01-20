import React, { useEffect, useContext } from 'react';
import MyContext from '../context/PlanetContext';
import getStarWars from '../requestAPI';
import './Table.css';

function Table() {
  const {
    setPlanets,
    planets,
    search,
    setPlanetsOriginal,
  } = useContext(MyContext);

  useEffect(() => {
    async function getPlanets() {
      const data = await getStarWars();
      setPlanets(data.results);
      setPlanetsOriginal(data.results);
    }
    getPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className="table-container">
      <thead className="table-head">
        <tr className="table-line">
          <th className="table-colum">Name</th>
          <th className="table-colum">Rotation Period</th>
          <th className="table-colum">Orbital Period</th>
          <th className="table-colum">Diameter</th>
          <th className="table-colum">Climate</th>
          <th className="table-colum">Gravity</th>
          <th className="table-colum">Terrain</th>
          <th className="table-colum">Surface Water</th>
          <th className="table-colum">Population</th>
          <th className="table-colum">Films</th>
          <th className="table-colum">Created</th>
          <th className="table-colum">Edited</th>
          <th className="table-colum">URL</th>
        </tr>
      </thead>
      <tbody>

        { planets && planets.filter((planet) => planet.name
          .toLowerCase().includes(search))
          .map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td><a href={ planet.films }>Link</a></td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td><a href={ planet.url }>Link</a></td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
