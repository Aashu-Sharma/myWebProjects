import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourites, removeFavourites} from '../../features/AnimeSlice.js'


function TopAnimeCard({ anime }) {
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.anime.favourites);
    const isFavourite = favourites.some((fav) => fav.mal_id === anime.mal_id);

    const toggleFavourites = (anime) => {
        if (isFavourite) {
            dispatch(removeFavourites(anime.mal_id));
        } else {
            dispatch(addFavourites(anime))
        }
    };
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites])
    return (
        <div
            className="w-[185px] bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition flex-shrink-0 overflow-hidden"
        >
            <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="rounded-lg mb-4 w-full h-48 object-cover object-center object-no-repeat"
            />
            <h3 className="text-lg font-bold truncate">{anime.title}</h3>
            <div className="mt-4 flex justify-between items-center">
                <button
                    onClick={() => toggleFavourites(anime)}
                    className={`px-4 py-2 text-sm font-bold rounded ${
                        isFavourite ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                >
                    {isFavourite ? "Remove from Favorites" : "Add to Favorites"}
                </button>
                <Link
                    to={`/anime/${anime.mal_id}`}
                    className="text-sm text-blue-500 hover:underline mx-2"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default TopAnimeCard
