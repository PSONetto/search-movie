import './App.css'
import React, { useEffect, useState } from 'react'
import Content from '../components/Content'

export default function App() {
    const [query, setQuery] = useState("")
    const [movieData, setMovieData] = useState([])

    const getMovie = () => {
        fetch('movie.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            console.log(response)
            return response.json();
        }).then(function (myJson) {
            setMovieData(myJson)
        })
    }

    useEffect(() => {
        getMovie()
    })

    return (
        <div className="app">
            <input className="search" type="search" placeholder="Insert search term..."
                value={query}
                onChange={search => setQuery(search.target.value)} />
            <main className="content">
                {movieData.filter(e => {
                    if (!query) {
                        return e
                    } else if (e.Title.toLowerCase().includes(query.toLowerCase())) {
                        return e
                    }
                }).map((e, i) => {
                    return (
                        <Content props={e} />
                    )
                })}
            </main>
        </div>
    )
}