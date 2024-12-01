import React, {useEffect} from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addFavourites, removeFavourites } from '../../features/AnimeSlice.js'

function AnimeCard({ anime }) {
    const dispatch = useDispatch()
    const favourites = useSelector((state) => state.anime.favourites);
    const isFavourite = favourites.some((fav) => fav.mal_id === anime.mal_id);
    const toggleFavourites = (anime) => {
        if(isFavourite){
            dispatch(removeFavourites(anime.mal_id));
        }else{
            dispatch(addFavourites(anime))
        }
    };

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites])


    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 truncate">{anime.title}</h2>
                <p className="text-sm text-gray-600 truncate">
                    {anime.synopsis || "No Synopsis available"}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <button 
                        onClick = {() => toggleFavourites(anime)}
                        className={`px-4 py-2 text-sm font-bold rounded ${
                            isFavourite ? "bg-red-500 text-white hover:bg-red-600": "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                    {isFavourite? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                    <Link
                        to={`/anime/${anime.mal_id}`}
                        className="text-sm text-blue-500 hover:underline mx-2"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AnimeCard;
