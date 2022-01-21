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
          <th className="table-column">Name</th>
          <th className="table-column">Rotation Period</th>
          <th className="table-column">Orbital Period</th>
          <th className="table-column">Diameter</th>
          <th className="table-column">Climate</th>
          <th className="table-column">Gravity</th>
          <th className="table-column">Terrain</th>
          <th className="table-column">Surface Water</th>
          <th className="table-column">Population</th>
          <th className="table-column">Films</th>
          <th className="table-column">Created</th>
          <th className="table-column">Edited</th>
          <th className="table-column ">URL</th>
        </tr>
      </thead>
      <tbody>

        { planets && planets.filter((planet) => planet.name
          .toLowerCase().includes(search))
          .map((planet) => (
            <tr className="line" key={ planet.name }>
              <td className="line-center padding-left" data-testid="planet-name">{planet.name}</td>
              <td className="line-center" >{planet.rotation_period}</td>
              <td className="line-center" >{planet.orbital_period}</td>
              <td className="line-center" >{planet.diameter}</td>
              <td className="line-center" >{planet.climate}</td>
              <td className="line-center" >{planet.gravity}</td>
              <td className="line-center" >{planet.terrain}</td>
              <td className="line-center" >{planet.surface_water}</td>
              <td className="line-center" >{planet.population}</td>
              <td className="line-center" ><a href={ planet.films }>Link</a></td>
              <td className="line-center" >{planet.created}</td>
              <td className="line-center" >{planet.edited}</td>
              <td className="line-center padding-rigth" ><a href={ planet.url }>Link</a></td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
