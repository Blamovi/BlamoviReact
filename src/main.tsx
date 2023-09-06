


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import Feed from './pages/Feed'
import PerfilUsuario from './pages/PerfilUsuario'
import Calendario from './pages/Calendario'

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='NomeDaRota' element={<NomeDoComponente/>}/> */}
       <Route path='/perfil' element={<PerfilUsuario/>}/> */
       <Route path='/feed' element={<Feed/>}/> */
       <Route path='/calendario' element={<Calendario/>}/> */
      </Routes>
      <Footer />
    </BrowserRouter>


  </React.StrictMode>)
