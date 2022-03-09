import './App.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../api/movieDB'
import Content from '../components/Content'

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