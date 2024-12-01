import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import SearchBar from './comps/SearchBar'
import './App.css';

function App() {
  const location = useLocation();
  const ishomepage = location.pathname === "/";
  return (
    <div className="flex flex-col min-h-screen bg-anime-gradient bg-anime-bg bg-cover bg-center bg-gradient-to-t from-black via-transparent to-black ">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-center md:text-left">
            <a href="/" className="hover:text-indigo-400 transition duration-300">
              AnimeStaan
            </a>
          </h1>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-lg mt-4 md:mt-0">
            {ishomepage ? (
              <>
                <a
                  href="#popular"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Popular
                </a>
                <a
                  href="#airing"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Airing
                 </a>
                <a
                  href="#upcoming"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Upcoming
                </a>
              </>) :

              (
                <>
                  <Link
                    to="/popular"
                    className="hover:text-indigo-400 transition duration-300"
                  >
                    Popular
                </Link>
                  <Link
                    to="/airing"
                    className="hover:text-indigo-400 transition duration-300"
                  >
                    Airing
                </Link>
                  <Link
                    to="/upcoming"
                    className="hover:text-indigo-400 transition duration-300"
                  >
                    Upcoming
                </Link>
                </>
              )

            }
          </nav>

          {/* Search Bar */}
          <div className="w-full md:w-1/2 lg:w-1/3 mt-4 md:mt-0">
            <SearchBar />
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main className="container mx-auto px-4 my-6 flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black-400 text-white text-center py-4">
        <p>&copy; 2024 AnimeStaan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}


export default App;
