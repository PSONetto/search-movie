import './App.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../api/movieDB'

export default function App() {
    const [query, setQuery] = useState("")

    return (
        <div className="app">
            <input className="search" type="search" placeholder="Insert search term..."
                value={query}
                onChange={search => setQuery(search.target.value)} />
            <main className="content">
                {search.filter(e => {
                    if (!query) {
                        return
                    } else if (e.Title.toLowerCase().includes(query.toLowerCase())) {
                        return e
                    }
                }).map((e, i) => {
                    return (
                        <div className="content">
                            <h1 className="title">{e.Title}</h1>
                            <p className="year">{e.Year}</p>
                            <img src={e.Poster} alt={e.Title} />
                            <p className="imdb">IMDB ID: {e.imdbID}</p>
                            <p className="type">Type: {e.Type}</p>
                            <Link to={`/details/${e.imdbID}`} key={e.imdbID}>More Details</Link>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}