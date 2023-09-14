import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// componentes
import Header from './components/Header'
import Calendario from './pages/Calendario'
import Footer from './components/Footer'

import {BrowserRouter, Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/Calendario' element={<Calendario/>}/> */
</Routes>
<Footer/>
</BrowserRouter>
  </React.StrictMode>,
)