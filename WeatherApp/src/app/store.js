import {configureStore} from '@reduxjs/toolkit';
import weatherReducer  from '../features/WeatherSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,  // Key must match useSelector
    },

});