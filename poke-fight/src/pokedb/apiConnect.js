import { createSlice} from '@reduxjs/toolkit'

const initialPokemon = fetch("https://pokeapiconnectg.onrender.com/pokemon/ditto").then((data) => {return data.json()});

export const pokemonSlice = createSlice({
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
    show: (state) => {
      console.log(state);
    }
  }
})

export const {show} = pokemonSlice.actions;

export default pokemonSlice.reducer;