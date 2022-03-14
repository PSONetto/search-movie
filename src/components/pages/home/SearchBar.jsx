import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
    const changeHandler = search => {
        props.setQuery(search.target.value)
    }

    return (
        <form className='search-bar' name='search-bar'>
            <label htmlFor='search' hidden>Search</label>
            <input id='search'
                type='search'
                placeholder='Search...'
                value={props.query}
                onChange={changeHandler} />
        </form>
    )
}

export default SearchBar