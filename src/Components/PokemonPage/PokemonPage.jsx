import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import test from '../../Assets/bug.svg';
// import axios from 'axios';
import normal from '../../Assets/normal.svg';
import water from '../../Assets/water.svg';
import electric from '../../Assets/electric.svg';
import fighting from '../../Assets/fighting.svg';
import ground from '../../Assets/ground.svg';
import psychic from '../../Assets/psychic.svg';
import rock from '../../Assets/rock.svg';
import dark from '../../Assets/dark.svg';
import steel from '../../Assets/steel.svg';
import fire from '../../Assets/fire.svg';
import grass from '../../Assets/grass.svg';
import ice from '../../Assets/ice.svg';
import poison from '../../Assets/poison.svg';
import flying from '../../Assets/flying.svg';
import bug from '../../Assets/bug.svg';
import ghost from '../../Assets/ghost.svg';
import dragon from '../../Assets/dragon.svg';
import fairy from '../../Assets/fairy.svg';

function PokemonPage(props) {
    const { data } = props;

    if (!data.name) {
        return (
            <div className="loading-page flex-row centered">
               <p>Loading</p>
            </div>
        )
    }

    return (
        <div style={{backgroundColor: 
            data?.types[0]?.type?.name === 'normal' ? '#9A9DA1' :
            data?.types[0]?.type?.name === 'water'?  '#559EDF':
            data?.types[0]?.type?.name === 'electric'? '#EDD53F':
            data?.types[0]?.type?.name === 'fighting'? '#D94256':
            data?.types[0]?.type?.name === 'ground'?  '#D78555':
            data?.types[0]?.type?.name === 'psychic'?  '#F87C7A':
            data?.types[0]?.type?.name === 'rock'?  '#CEC18C':
            data?.types[0]?.type?.name === 'dark'?  '#5F606D':
            data?.types[0]?.type?.name === 'steel'?  '#5596A4':
            data?.types[0]?.type?.name === 'fire'? '#F8A54F':
            data?.types[0]?.type?.name === 'grass'?  '#5DBE62':
            data?.types[0]?.type?.name === 'ice'?  '#7ED4C9':
            data?.types[0]?.type?.name === 'poison'?  '#B563CE':
            data?.types[0]?.type?.name === 'flying'?  '#9BB4E8':
            data?.types[0]?.type?.name === 'bug'?  '#9DC130':
            data?.types[0]?.type?.name === 'ghost'?  '#6970C5':
            data?.types[0]?.type?.name === 'fairy' ? '#EF97E6' :
            '#0773C7'
            }} className="pokemon-page__container">
                <div className="pokemon__card">
                    {/* <div className="page__header-nav  flex-row ">
                    <Link className="icon__container flex-row centered" onClick={(x) => props.clearPokemon()} to="/"><IoArrowBackOutline className="icon" /></Link>
                    <h1>{data.name}</h1>
                    </div> */}
                    <Link 
                        className="icon__container flex-row centered" 
                        onClick={(x) => props.clearPokemon()} to="/">
                            <IoCloseOutline className="icon" />
                    </Link>
                    <div className="poke-id__name flex-row">
                        <h4>{

                            data.id.toString().length === 1 ? `00`+data.id :
                            data.id.toString().length === 2 ? `0`+data.id : data.id }:</h4>
                        <h1>{data.name}</h1>
                    </div>

            <div className="img__container flex-row centered">
                        
                <img className="poke-img" src={data?.sprites?.other['official-artwork'].front_default} alt={`${data.name}`}/>    
            </div>
            <div className="sub-header__container">
                <h4 className="sub-title">Info</h4>
                <div className="div__line"/>
            </div>
            <div className="poke-data__container">
                        <div className="flex-row spaced stat">
                            <h4>Name</h4>
                            <h4>{data.name}</h4>
                        </div>
                        <div className="flex-row spaced stat">
                            <h4>Height</h4>
                            <h4 className="lowercase">{Math.floor(((data.height / 0.1) * 0.393700787).toFixed(0)/12)} ft {((data.height / 0.1) * 0.393700787).toFixed(0) % 12} in</h4>
                        </div>
                        <div className="flex-row spaced stat">
                            <h4>Weight</h4>
                            <h4 className="lowercase">{Math.round((data.weight / 10) * 2.2046) } lbs</h4>
                        </div>
            </div>

            <div className="section__container">
            <div className="sub-header__container">
                <h4 className="sub-title">Types</h4>
                <div className="div__line"/>
            </div>
            <div className="flex-row types__container">
                {data?.types?.map(type=> {
                 return (
                     <div className="type__container flex-row">
                        <img className="icon" src={
                            type.type.name === 'normal' ? normal :
                            type.type.name === 'water'?  water:
                            type.type.name === 'electric'? electric:
                            type.type.name === 'fighting'?  fighting:
                            type.type.name === 'ground'?  ground:
                            type.type.name === 'psychic'?  psychic:
                            type.type.name === 'rock'?  rock:
                            type.type.name === 'dark'?  dark:
                            type.type.name === 'steel'?  steel:
                            type.type.name === 'fire'? fire:
                            type.type.name === 'grass'?  grass:
                            type.type.name === 'ice'?  ice:
                            type.type.name === 'poison'?  poison:
                            type.type.name === 'flying'?  flying:
                            type.type.name === 'bug'?  bug:
                            type.type.name === 'ghost'?  ghost:
                            type.type.name === 'fairy' ? fairy :
                            dragon
                        } alt=""/>
                        <p>{type.type.name}</p>
                     </div>
                 )
                })}
            </div>
            </div>
            {/* <h4 className="sub-title">Weaknesses</h4>
            <div>
                {
                    
                }
            </div> */}
            <div className="section__container">
            <div className="sub-header__container">
                <h4 className="sub-title">Base Stats</h4>
                <div className="div__line"/>
            </div>
            <div className="base-stats__container">
                {data?.stats?.map(stat => {
                    return (
                        <div className="flex-row spaced stat">
                            <h4>{stat?.stat?.name}</h4>
                            <h4>{stat?.base_stat}</h4>
                        </div>
                    )
                })}
                
            </div>
            </div>
            </div>    
        </div>
    )
}

export default PokemonPage;