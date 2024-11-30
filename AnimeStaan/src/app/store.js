import {configureStore} from '@reduxjs/toolkit';
import animeReducer from '../features/AnimeSlice.js';

export const store = configureStore({
    reducer:{
        anime: animeReducer,
    }
})