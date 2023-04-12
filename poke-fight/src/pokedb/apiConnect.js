import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialPokemon = fetch("https://pokeapiconnectg.onrender.com/pokemon/ditto").then((data) => data.json());

const pokemonSlice = createSlice({
  name: 'player1',
  initialState: {
    pokemon1: initialPokemon,
    pokemon2: "",
    pokemon3: "",
    pokemon4: "",
    pokemon5: "",
    pokemon6: ""
  },
  reducers: {
    lose: state => {

      state.value += 1
    }
  }
})

export const {lose} = pokemonSlice.actions 

export const store = configureStore({
  reducer: pokemonSlice.reducer
})

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}


