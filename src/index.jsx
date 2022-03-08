import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './core/App'
import Details from './core/Details'
import Detail from './core/Detail'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route element={<App />} path="/" exact />
        <Route element={<Details />} path="/details" />
        <Route element={<Detail />} path="/details/:id" />
        <Route
            path="*"
            element={
                <main>
                    <p>Nothing Found</p>
                </main>
            }
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals();
