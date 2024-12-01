import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimeBySearch, addRecentSearches, removeRecentSearches } from "../features/AnimeSlice";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const recentSearches = useSelector((state) => state.anime.recentSearches);

    useEffect(() => {
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }, [recentSearches]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            // dispatch(fetchAnimeBySearch(query));
            dispatch(addRecentSearches(query));
            navigate(`/animes?query=${query}`)
            setQuery("");
        }
    };

    const handleSuggestionClick = (query) => {
        setQuery(query);
        setShowSuggestions(false);
        navigate(`/animes?query=${query}`)
        // dispatch(fetchAnimeBySearch(query));
    };

    return (
        <div className="relative">
            <form onSubmit={handleSearch} className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    // onFocus={() => setShowSuggestions(true)}
                    onClick = {() => setShowSuggestions(prev => !prev)}
                    placeholder="Search for an anime"
                    className="flex-1 p-2 outline-none text-gray-700"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
                    Search
                </button>
            </form>
            {showSuggestions && recentSearches.length > 0 && (
                <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-2 rounded-lg shadow-md z-10">
                    {recentSearches.slice(Math.max(recentSearches.length - 5, 0)).map((search, index) => (
                        <li
                            key={`${index}-${search}`}
                            onClick={() => handleSuggestionClick(search)}
                            className="p-2 cursor-pointer hover:bg-gray-200 flex items-center justify-between text-gray-500"
                        >
                            <span>{search}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(removeRecentSearches(search));
                                }}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;
