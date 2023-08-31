import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        {/* <Route path='NomeDaRota' element={<NomeDoComponente/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>


  </React.StrictMode>,
)
