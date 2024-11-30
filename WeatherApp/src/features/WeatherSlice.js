import {createSlice} from '@reduxjs/toolkit';

const loadFavouritesFromLocalStorage = () => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
    return savedFavourites ? savedFavourites : []; 
}

const initialState = {
    weatherData: null, // stores the current weather information fetched from API call.
    loading: false,    // Manage the loading state when the data is being fetched from API.
    error: null,       // deals with any error that occurs.
    favourites: loadFavouritesFromLocalStorage(),    // list of cities that user frequently visits.
}

export const weatherSlice = createSlice({
    name: "Weather", 
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
            state.weatherData = action.payload;  //sets the weather data
        },

        setLoading: (state, action) => {
            state.loading = action.payload; // sets the loading state
        },

        setError: (state, action) => {
            state.error = action.payload; // handles the erro that occurs
        },
        
        setFavourites: (state, action) => {
            if (!state.favourites.includes(action.payload)) {
                state.favourites.push(action.payload); // adds the favorite city if not already present
            }
        },

        removeFavourites: (state, action) => {
            state.favourites = state.favourites.filter((city) => city !== action.payload);  // remove the favourite citites
        },
    }
})

export const {setWeatherData, setLoading, setError, setFavourites, removeFavourites} = weatherSlice.actions;

export default weatherSlice.reducer;