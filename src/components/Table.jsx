import React, { useEffect, useContext } from 'react';
import MyContext from '../context/PlanetContext';
import getStarWars from '../requestAPI';

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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>

        { planets && planets.filter((planet) => planet.name
          .toLowerCase().includes(search))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td><a href={ planet.films }>{planet.films}</a></td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td><a href={ planet.url }>{planet.url}</a></td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
