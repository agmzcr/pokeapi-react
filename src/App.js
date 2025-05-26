//App.js
import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./Components/PokemonThumbnail";
import "./App.css";
import Description from "./Components/Description";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        return await res.json();
      })
    );

    setAllPokemons((currentList) => {
      const all = [...currentList, ...pokemonData];
      const unique = Array.from(new Map(all.map((p) => [p.id, p])).values());
      return unique.sort((a, b) => a.id - b.id);
    });
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokedex</h1>

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons
            .slice()
            .sort((a, b) => a.id - b.id)
            .map((pokemon, index) => (
              <PokemonThumbnail
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
                height={pokemon.height}
                weight={pokemon.weight}
                stat1={pokemon.stats[0].stat.name}
                stat2={pokemon.stats[1].stat.name}
                stat3={pokemon.stats[2].stat.name}
                stat4={pokemon.stats[3].stat.name}
                stat5={pokemon.stats[4].stat.name}
                stat6={pokemon.stats[5].stat.name}
                bs1={pokemon.stats[0].base_stat}
                bs2={pokemon.stats[1].base_stat}
                bs3={pokemon.stats[2].base_stat}
                bs4={pokemon.stats[3].base_stat}
                bs5={pokemon.stats[4].base_stat}
                bs6={pokemon.stats[5].base_stat}
                onClick={() => setSelectedPokemon(pokemon)}
              />
            ))}
        </div>
        {selectedPokemon && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedPokemon(null)}
          >
            <div
              className={`modal-content ${selectedPokemon.types[0].type.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedPokemon(null)}
              >
                X
              </button>
              <Description
                id={selectedPokemon.id}
                name={selectedPokemon.name}
                image={selectedPokemon.sprites.other.dream_world.front_default}
                weightpok={selectedPokemon.weight}
                heightpok={selectedPokemon.height}
                pokstat1={selectedPokemon.stats[0].stat.name}
                pokstat2={selectedPokemon.stats[1].stat.name}
                pokstat3={selectedPokemon.stats[2].stat.name}
                pokstat4={selectedPokemon.stats[3].stat.name}
                pokstat5={selectedPokemon.stats[4].stat.name}
                pokstat6={selectedPokemon.stats[5].stat.name}
                posbs1={selectedPokemon.stats[0].base_stat}
                posbs2={selectedPokemon.stats[1].base_stat}
                posbs3={selectedPokemon.stats[2].base_stat}
                posbs4={selectedPokemon.stats[3].base_stat}
                posbs5={selectedPokemon.stats[4].base_stat}
                posbs6={selectedPokemon.stats[5].base_stat}
              />
            </div>
          </div>
        )}
        <button className="load-more" onClick={() => getAllPokemons()}>
          More Pokemons
        </button>
      </div>
    </div>
  );
}

export default App;
