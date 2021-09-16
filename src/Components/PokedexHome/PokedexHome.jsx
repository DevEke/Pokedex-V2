 import PokemonListItem from "../PokemonListItem/PokemonListItem";
 import {Link } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";

 function PokedexHome(props) { 
     
    let filteredPokemon = props.pokemon;
    const cased = props.searchQuery.toLowerCase();

    if (props.searchQuery !== '') {
        filteredPokemon = props.pokemon.filter(pokemon => pokemon.name.includes(cased))
    }

     return (
        <div className="pokemon-home__container">
            <nav className=" home-nav__container flex-row spaced">
                <div className="search-input__container flex-row spaced">
                <input
                    onChange={(e) => props.setQuery(e)}
                    value={props.searchQuery}
                    className="pokemon__search"
                    placeholder="Search Pokemon">
                </input>
                {props.searchQuery.length > 0 ?
                <button
                    className="clear-search"
                    onClick={() => props.clearQuery()}>
                    <IoCloseOutline className="icon"/>
                </button> :null }
                </div>
                
            </nav>
            {filteredPokemon.length === 0 ? 
            <div>
                <p>No Results</p>
            </div> :
            <div className="pokemon-list__container flex-clm">
                {filteredPokemon.map(pokemon => {
                    return (
                        <Link
                            className="pokemon-list__item flex-row"
                            key={pokemon.name}
                            to={`/${pokemon.name}`}
                            onClick={() => props.selectPokemon(pokemon)}>
                            <PokemonListItem pokemon={pokemon}/>
                        </Link>
                    )
                })
                }
            </div> }
      </div>
     )
 }

 export default PokedexHome;