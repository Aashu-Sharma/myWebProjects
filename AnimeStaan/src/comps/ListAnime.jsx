import React, {useEffect} from "react";
import {useSearchParams} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import AnimeCard from "./cards/AnimeCard";
import { fetchAnimeBySearch } from "../features/AnimeSlice";

function ListAnime() {
    const searchResults = useSelector((state) => state.anime.searchResults);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query")
    const dispatch = useDispatch();

    useEffect(() => {
        if(query){
            dispatch(fetchAnimeBySearch(query))
        }
    }, [query, dispatch])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {searchResults.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    );
}

export default ListAnime;
