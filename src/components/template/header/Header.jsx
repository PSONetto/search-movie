import './Header.css'
import React from 'react'
import { render } from 'react-dom'
import { SearchBar } from '../../searchBar/SearchBar'


export default props =>
    <header className='header'>
        {SearchBar}
    </header>