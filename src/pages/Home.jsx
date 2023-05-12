import React, { useEffect, useState } from 'react';
import './style';

function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <ol className="main">
      {pokemonList.map(pokemon => (
        <li key={pokemon.name}>
          <div className="cards">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
          {pokemon.name}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Home;
