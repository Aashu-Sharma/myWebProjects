import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavourites } from '../features/WeatherSlice';
import { BiSearch } from 'react-icons/bi';
import useFetchWeather from '../hooks/useFetchWeather';
import Dropdown from './Dropdown';

function SearchBar() {
    const [city, setCity] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const favourites = useSelector((state) => state.weather.favourites);
    const [locationCoords, setLocationCoords] = useState(null);
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    const fetchWeatherData = useFetchWeather();

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const coords = {latitude, longitude};
            setLocationCoords(coords)
            fetchWeatherData(coords);
        });
    }, []);

    const handleSearch = () => {
        if (city) {
            fetchWeatherData(city);
            setCity('');
            dispatch(setFavourites(city));
        }
    };

    const handleRecentSearches = (queryCity) => {
        setCity(queryCity);
        fetchWeatherData(queryCity);
    };

    useEffect(() => {
        // Hide dropdown when clicking outside
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-white/80 rounded-lg shadow-md max-w-md mx-auto relative">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                onMouseEnter={() => setShowDropdown(true)}
                placeholder="Enter city name"
                className="p-3 w-72 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            />
            <button
                onClick={handleSearch}
                className="flex items-center gap-2 p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-150"
            >
                <BiSearch size={20} />
                <span>Search</span>
            </button>

            {showDropdown && (
                <Dropdown myref={dropdownRef} city={city} recentSearches={handleRecentSearches} favourites={favourites} />
            )}
        </div>
    );
}

export default SearchBar;
