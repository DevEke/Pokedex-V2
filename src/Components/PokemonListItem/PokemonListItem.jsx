function PokemonListItem(props) {
    return (
        <div className="pokemon-list-item">
            <p>{props.pokemon.name}</p>
        </div>
    )
}

export default PokemonListItem;