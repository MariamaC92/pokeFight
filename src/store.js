import  {configureStore} from '@reduxjs/toolkit';
import pokeReducer from './pokedb/apiConnect';

export const store = configureStore({
    reducer: {
        pokemon: pokeReducer, 
    },
})