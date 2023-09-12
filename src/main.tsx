import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// componentes
import Header from './components/Header'
import FilmesInformacoes from './pages/FilmesInformacoes'
import Footer from './components/Footer'

import {BrowserRouter, Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/filmesInformacoes' element={<FilmesInformacoes/>}/> */
</Routes>
<Footer/>
</BrowserRouter>
  </React.StrictMode>,
)
