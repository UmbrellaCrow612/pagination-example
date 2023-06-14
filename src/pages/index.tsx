import React, { useState, useEffect } from "react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const fetchPokemons = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemons(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);

  const handleNext = () => {
    if (next) {
      fetchPokemons(next);
    }
  };

  const handlePrevious = () => {
    if (previous) {
      fetchPokemons(previous);
    }
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      {pokemons.map((pokemon:any) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
      <button onClick={handlePrevious} disabled={!previous}>
        Previous
      </button>
      <button onClick={handleNext} disabled={!next}>
        Next
      </button>
    </div>
  );
};

export default PokemonList;
