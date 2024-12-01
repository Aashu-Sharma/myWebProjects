import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

function App() {

  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
