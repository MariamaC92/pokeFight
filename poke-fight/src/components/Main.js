import {useState, useEffect} from 'react';
import store from '../pokedb/apiConnect';
import { useSelector } from 'react-redux';

export default function Main() {
    const pokemon = useSelector(state => state);
    console.log(pokemon);

    return (
        <h1>
             {/* {pokemon.map((pokemon) => <div>${pokemon}</div>)}  */}
        </h1>
    )
};