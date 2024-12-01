import {useEffect} from 'react'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const loadRecentSearches = () => {
    const lastSearches = JSON.parse(localStorage.getItem("recentSearches"));
    return lastSearches ? lastSearches : [];
}

const loadFavourites = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites"));
    return favourites ? favourites : [];
}

// const loadTopAnimes = async () => {
//     const resp = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing`);
//     return resp.data.data;
// }

export const fetchAnimeBySearch = createAsyncThunk(
    'anime/fetchAnimeBySearch',
    async(query) => {
        const resp = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
        return resp.data.data;
    }
);

export const fetchAnimeDetails = createAsyncThunk(
    'anime/fetchAnimeDetails',
    async(id) => {
        const resp = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        return resp.data.data;
    }
)

export const fetchTopAnimes = createAsyncThunk(
    'anime/fetchTopAnimes',
    async (query) => {
        const resp = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
        console.log(resp.data.data)
        return resp.data.data;
    }
);

export const fetchTopAiring = createAsyncThunk(
    'anime/fetchTopAiring',
    async (query) => {
        const resp = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing`);
        console.log(resp.data.data)
        return resp.data.data;
    }
);

export const fetchTopUpcoming = createAsyncThunk(
    'anime/fetchTopUpcoming',
    async (query) => {
        const resp = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=upcoming`);
        console.log(resp.data.data)
        return resp.data.data;
    }
);

export const animeSlice = createSlice({
    name: 'anime',

    initialState: {
        searchResults: [],
        recommendations: [],
        animeDetails: null,
        topAnimes : [],
        topAiring: [],
        topUpcoming: [],
        recentSearches: loadRecentSearches(),
        favourites: loadFavourites(),
        status: 'idle',
        error: null
    },

    reducers: {
        addRecentSearches: (state, action) => {
            if(!state.recentSearches.includes(action.payload)){
                state.recentSearches.push(action.payload);
            }
        },

        removeRecentSearches: (state, action) => {
            state.recentSearches = state.recentSearches.filter((anime) => anime.mal_id !== action.payload)
        },

        addFavourites: (state, action) => {
            if (!state.favourites.includes(action.payload)) {
                state.favourites.push(action.payload);
            }
        },

        removeFavourites: (state, action) => {
            state.favourites = state.favourites.filter((anime) => anime.mal_id !== action.payload)
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchAnimeBySearch.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAnimeBySearch.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.searchResults = action.payload;
        })
        .addCase(fetchAnimeBySearch.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })

        builder
        .addCase(fetchAnimeDetails.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAnimeDetails.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.animeDetails = action.payload;
        })
        .addCase(fetchAnimeDetails.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })

        builder
        .addCase(fetchTopAnimes.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTopAnimes.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.topAnimes = action.payload;
        })
        .addCase(fetchTopAnimes.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })

        builder
        .addCase(fetchTopAiring.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTopAiring.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.topAiring = action.payload;
        })
        .addCase(fetchTopAiring.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })

        builder
        .addCase(fetchTopUpcoming.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTopUpcoming.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.topUpcoming = action.payload;
        })
        .addCase(fetchTopUpcoming.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
})

export const {addFavourites, removeFavourites, addRecentSearches, removeRecentSearches} = animeSlice.actions;

export default animeSlice.reducer;