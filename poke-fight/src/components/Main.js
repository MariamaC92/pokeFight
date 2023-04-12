import {useState, useEffect} from 'react';
import store from '../pokedb/apiConnect';

export default function Main() {

    return (
        <h1>${store.pokemon1}</h1>
    )
};