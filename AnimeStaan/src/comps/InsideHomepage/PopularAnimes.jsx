import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import TopAnimeCard from '../Cards/TopAnimeCard'
import { fetchTopAnimes } from '../../features/AnimeSlice';

function PopularAnimes({scRef, scRight, scLeft}) {
    const dispatch = useDispatch();
    const {topAnimes, status} = useSelector((state) => state.anime);
    useEffect(() => {
        if(!topAnimes.length){
            dispatch(fetchTopAnimes());
        }
    },[dispatch, topAnimes.length]);
    return (
    <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text">
                Most Popular
                </h2>
            <Link to = "/popular" 
                className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition">
                View More >>
            </Link>
        </div>

        {/* Content */}
        {status === "loading" && <p className="text-gray-300">Loading...</p>}
        {status === "rejected" && (
            <p className="text-red-500">Failed to load top animes.</p>
        )}
        {status === "succeeded" && (
            <div className="relative">
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-gray-700 text-white rounded-full p-2 hover:scale-110 shadow-lg transition"
                    onClick={scLeft}
                >
                    ◀
                    </button>
                <div
                    ref={scRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {topAnimes.map((anime) => (
                        <div
                            key={anime.mal_id}
                            className="transition-transform transform hover:scale-105"
                        >
                            <TopAnimeCard anime={anime} />
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-gray-700 text-white rounded-full p-2 hover:scale-110 shadow-lg transition"
                    onClick={scRight}
                >
                    ▶
                    </button>
            </div>
        )}
    </div>
    )
}

export default PopularAnimes
