
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PokedexHome from './Components/PokedexHome/PokedexHome';
import PokemonPage from './Components/PokemonPage/PokemonPage';
import axios from 'axios';
import './Pokedex.scss';
import { useEffect, useState } from 'react';

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const getPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=898')
    .then(res => {
      setPokemon(res.data.results)
    }).catch(err => {
      console.error(err)
    })
  }

  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    axios.get(`${pokemon.url}`)
    .then(res => {
      setPokemonData(res.data);
    }).catch(err => {
      console.error(err)
    })
  }

  const clearPokemon = () => {
    setSelectedPokemon('');
    setPokemonData({});
  }

  const setQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const clearQuery= () =>{
    setSearchQuery('')
  }


  useEffect(() => {
    getPokemon();
  })

  

  return (
    <Router>
    <div className="App">
     <Route exact path="/" render={() => <PokedexHome
                                            selectedPokemon={selectedPokemon}
                                            selectPokemon={(x) => selectPokemon(x)} 
                                            pokemon={pokemon}
                                            searchQuery={searchQuery}
                                            setQuery={(e) => setQuery(e)}
                                            clearQuery={() => clearQuery()}/>}/>
     <Route path="/:pokemon" render={() => <PokemonPage clearPokemon={() => clearPokemon()} data={pokemonData} />}/>
    </div>
    </Router>  
  );
}

export default Pokedex;
