import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom';
import {fetchAnimeDetails, addFavourites, removeFavourites} from '../features/AnimeSlice'

function AnimeDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { animeDetails, favourites, status, error} = useSelector((state) => state.anime);
    const isFavourite = favourites.some((fav) => fav.mal_id === animeDetails?.mal_id)
    const toggleFavourites = () => {
        if(isFavourite){
            dispatch(removeFavourites(animeDetails.mal_id))
        }else{
            dispatch(addFavourites(animeDetails))
        }
    }

    useEffect(()=> {
        dispatch(fetchAnimeDetails(id))
    },[id, dispatch])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites])


    if(status === "loading"){
        return <div className = "text-center mt-8">Loading....</div>  
    } 

    if(status === "rejected"){
        return <div className="text-center mt-8 text-red-500">{error || "failed to load details."}</div>  
    }
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {animeDetails ?.trailer ?.embed_url && (
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">Watch Trailer</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={animeDetails.trailer.embed_url}
                            title={`${animeDetails.title} Trailer`}
                            autoplay
                            className="w-full h-64 rounded-lg"
                        ></iframe>
                    </div>
                </div>
            )}
            <div className="container mx-auto px-4 py-8">
                {animeDetails ? (
                    <div className="flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        {/* Left Section: Anime Image */}
                        <div className="md:w-1/3 w-full">
                            <img
                                src={animeDetails.images.jpg.large_image_url}
                                alt={animeDetails.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Section: Anime Details */}
                        <div className="md:w-2/3 w-full p-6 flex flex-col">
                            {/* Title */}
                            <h1 className="text-4xl font-bold mb-4 border-b-2 border-gray-600 pb-2">
                                {animeDetails.title}
                            </h1>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {animeDetails.synopsis || "No synopsis available."}
                            </p>

                            {/* Information Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                {/* Left Column */}
                                <div>
                                    <p className="mb-2">
                                        <strong className="text-gray-400">Episodes:</strong>{" "}
                                        {animeDetails.episodes || "N/A"}
                                    </p>
                                    <p className="mb-2">
                                        <strong className="text-gray-400">Status:</strong>{" "}
                                        {animeDetails.status || "N/A"}
                                    </p>
                                    <p className="mb-2">
                                        <strong className="text-gray-400">Rating:</strong>{" "}
                                        {animeDetails.rating || "N/A"}
                                    </p>
                                </div>

                                {/* Right Column */}
                                <div>
                                    <p className="mb-2">
                                        <strong className="text-gray-400">Genres:</strong>{" "}
                                        {animeDetails.genres
                                            ?.map((g) => g.name)
                                                .join(", ") || "N/A"}
                                    </p>
                                    <p className="mb-2">
                                        <strong className="text-gray-400">Score:</strong>{" "}
                                        {animeDetails.score || "N/A"}
                                    </p>
                                    <p className="mb-2">
                                        <strong className="text-gray-400">Type:</strong>{" "}
                                        {animeDetails.type || "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Favourites Button */}
                            <button
                                onClick={toggleFavourites}
                                className={`self-start px-6 py-2 text-sm font-bold rounded ${
                                    isFavourite
                                        ? "bg-red-500 text-white hover:bg-red-600"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                    }`}
                            >
                                {isFavourite ? "Remove from Favorites" : "Add to Favorites"}
                            </button>
                        </div>
                    </div>
                ) : (
                        <div className="text-center mt-8 text-gray-400">No Details Available</div>
                    )}
            </div>
        </div>


    )
}

export default AnimeDetails
