import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Details from '../pages/detail/Details'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/:id' element={<Details />}  />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes