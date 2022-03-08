import React from 'react'
import './SearchBar.css'

export const SearchBar = 
    <form className="form">
        <label htmlFor="search"></label>
        <input className="searchBar" type="text" name="search" placeholder="Insert movie..." />
        <button className="button" type="submit" name="submitButton">Search</button>
    </form>