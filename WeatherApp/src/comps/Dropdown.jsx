import React from 'react';
import {useDispatch} from 'react-redux';
import { removeFavourites } from '../features/WeatherSlice';
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai';

function Dropdown({myref, recentSearches, city, favourites }) {
    const dispatch = useDispatch()
    return (
        <>
            <ul ref={myref} className="absolute top-full left-0 w-full bg-white border-gray-200 rounded-lg shadow-lg mt-2 max-h-48 overflow-auto z-10">
                {favourites.map((city, id) => (
                    <li key={`${city}-${id}`} className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <p onClick={() => recentSearches(city)}>{city}</p>
                        <button
                            onClick={() => dispatch(removeFavourites(city))}
                            className="text-red-500 cursor-pointer hover:text-red-600 transition"
                        >
                            <AiOutlineClose size={18} />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Dropdown
