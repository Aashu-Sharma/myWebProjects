import React, {useEffect} from 'react';
import AnimeCard from '../Cards/AnimeCard';
import {fetchTopAiring} from '../../features/AnimeSlice'
import { useSelector, useDispatch } from 'react-redux';

function TopAiringAll() {
    const dispatch = useDispatch();
    const { topAiring, status } = useSelector((state) => state.anime);
    useEffect(() => {
        if (topAiring.length === 0) {
            dispatch(fetchTopAiring())
        }
    }, [dispatch, topAiring.length])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {topAiring.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    )
}

export default TopAiringAll
