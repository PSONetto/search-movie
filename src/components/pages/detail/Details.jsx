import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../../api'
import Poster from './Poster'
import Table from './Table'
import NoData from './NoData'
import './Details.css'

function Details() {
    const [details, setDetails] = useState([])
    const params = useParams()
    const work = findWork(params.id)

    function findWork(id) {
        return details.find(work => work.imdbID === id)
    }

    useEffect(() => {
        getDetails(setDetails)
    }, [])

    if (work) {
        return (
            <main className='detailed-content'>
                <Poster work={work} />
                <Table work={work} />
            </main>
        )
    } else {
        return (
            <main className='no-data'>
                <NoData />
            </main>
        )
    }
}

export default Details