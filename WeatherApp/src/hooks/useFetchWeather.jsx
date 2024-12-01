import React, {useCallback} from 'react';
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {setError, setLoading, setWeatherData} from '../features/WeatherSlice'

function useFetchWeather() {

    const apiKey = "4cef6562ad9cfce6fca169121df3453e";
    const dispatch = useDispatch();

    const fetchWeatherData = useCallback(async (location) => {
        dispatch(setLoading(true));
        let url;
        try {
            if (typeof location === "string") {
                url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
                console.log("stirng")
            } else {
                const { latitude, longitude } = location;
                url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
                console.log("lat, long")
            }

            const resp = await axios.get(url);
            dispatch(setWeatherData(resp.data));
            dispatch(setError(null));
        } catch (error) {
            dispatch(setError("Couldn't Fetch Weather. Please try again"))
        } finally {
            dispatch(setLoading(false));
        }
    },[dispatch, apiKey])


    return fetchWeatherData;
}

export default useFetchWeather;
