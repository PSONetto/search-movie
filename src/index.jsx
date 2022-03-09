import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/App'
import Details from './pages/Details'
import Detail from './pages/Detail'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route element={<App />} path="/" exact />
        <Route element={<Details />} path="/details" />
        <Route element={<Detail />} path="/details/:id" />
        <Route path="*" element={
                <main>
                    <p>Error 404</p>
                </main>
            }
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals();