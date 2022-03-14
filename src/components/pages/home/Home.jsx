import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Content from './Content'
import { getWorks } from '../../../api'
import './Home.css'

function Home() {
    const [works, setWorks] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        getWorks(setWorks)
    }, [])

    return (
        <main className='home'>
            <SearchBar setQuery={setQuery} query={query} />
            <Content works={works} query={query} />
        </main>
    )
}

export default Home