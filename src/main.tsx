import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';

//Biblioteca 
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favoritos/>} /> 
        {/* <Route path='NomeDaRota' element={<NomeDoComponente/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>


  </React.StrictMode>,
)
