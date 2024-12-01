import React, {useEffect} from 'react';
import AnimeCard from '../Cards/AnimeCard';
import {fetchTopUpcoming} from '../../features/AnimeSlice'
import { useSelector, useDispatch } from 'react-redux';

function TopUpcomingAll() {
    const dispatch = useDispatch();
    const { topUpcoming, status } = useSelector((state) => state.anime)
    useEffect(() => {
        if (topUpcoming.length === 0) {
            dispatch(fetchTopUpcoming())
        }
    }, [dispatch, topUpcoming.length])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {topUpcoming.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    )
}

export default TopUpcomingAll
