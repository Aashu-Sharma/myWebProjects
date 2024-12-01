import { useState } from 'react'
import {Provider} from 'react-redux';
import {store} from './app/store';
import SearchBar from './comps/SearchBar';
import DisplayWeather from './comps/DisplayWeather';

function App() {
  return (
    <Provider store={store}>
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center p-5 text-black"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/57/67/dc/5767dcabd3810d21976592da023e7e5c--mountain-illustration-landscape-illustration.jpg')",
        }}
      >
        <h1 className="text-3xl font-bold mb-6 text-black">Weather App</h1>
        <SearchBar />
        <DisplayWeather />
      </div>
    </Provider>
  );
}

export default App;

