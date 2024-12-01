import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AnimeCard from '../Cards/AnimeCard'
import {fetchTopAnimes} from '../../features/AnimeSlice'

function AllPopularAnimes() {
    const dispatch = useDispatch();
    const {topAnimes, status} = useSelector((state) => state.anime);
    useEffect(() => {
        if(topAnimes.length === 0){
            dispatch(fetchTopAnimes())
        }
    }, [dispatch, topAnimes.length])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {topAnimes.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    )
}

export default AllPopularAnimes
