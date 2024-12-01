import React from 'react';
import { useSelector } from 'react-redux';
import { WiThermometer, WiCloud, WiDaySunny, WiStrongWind } from 'react-icons/wi';

function DisplayWeather() {
    const weatherData = useSelector((state) => state.weather.weatherData);
    const error = useSelector((state) => state.weather.error);
    const loading = useSelector((state) => state.weather.loading);

    if (loading) return <p className="text-center text-xl">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!weatherData) return <p className="text-center">No data available. Search for a city!</p>;

    const tempInCelsius = (weatherData.main.temp - 273.15).toFixed(2);
    const feelsLikeInCelsius = (weatherData.main.feels_like - 273.15).toFixed(2);
    const windSpeed = weatherData.wind.speed;

    return (
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-80 mb-8 border border-gray-300">
            <h2 className="text-2xl text-blue-500 font-semibold mb-3 text-center">{weatherData.name}</h2>
            <div className="flex flex-col items-start justify-between">
                <p className="text-xl flex items-center mb-2"> Temp:
                    <WiThermometer className="mr-2 text-blue-500 text-2xl" /> {tempInCelsius}°C
                </p>
                <p className="text-xl flex items-center mb-2">
                    Feels like:
                    <WiThermometer className="mr-2 text-blue-500 text-2xl" /> {feelsLikeInCelsius}°C
                </p>
                <p className="text-xl flex items-center mb-2">
                    Weather:
                    <WiDaySunny className="mr-2 text-yellow-500 text-2xl" /> {weatherData.weather[0].description.toUpperCase()}
                </p>
                <p className="text-xl flex items-center mb-2">
                    Wind speed: 
                    <WiStrongWind className="mr-2 text-gray-500 text-2xl" /> {windSpeed} m/s
                </p>
            </div>
        </div>
    );
}

export default DisplayWeather;
