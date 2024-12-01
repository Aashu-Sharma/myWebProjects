import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './app/store';
import {Provider} from 'react-redux';
import Homepage from './comps/Homepage';
import AnimeDetails from './comps/AnimeDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListAnime from './comps/ListAnime';
import AllPopularAnimes from './comps/Sections/AllPopularAnimes';
import TopAiringAll from './comps/Sections/TopAiringAll';
import TopUpcomingAll from './comps/Sections/TopUpcomingAll';

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App/>}>
          <Route index element = {<Homepage/>}/>
          <Route path = "/animes" element = {<ListAnime/>}/>
          <Route path = "/popular" element = {<AllPopularAnimes/>}/>
          <Route path = "/airing" element = {<TopAiringAll/>}/>
          <Route path = "/upcoming" element = {<TopUpcomingAll/>}/>
          <Route path = "/anime/:id" element = {<AnimeDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
