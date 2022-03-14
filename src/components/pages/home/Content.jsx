import React from 'react'
import Card from './Card'
import './Content.css'

function Content(props) {
    
    return (
        <ul className='content'>
            {props.works.filter(work => {
                const match = work.Title.toLowerCase()
                    .includes(props.query.toLowerCase())
                if (!props.query) {
                    return work
                } else if (match) {
                    return work
                }
            }).map(work => {
                return (
                    <Card work={work} key={work.imdbID} />
                )
            })}
        </ul >
    )
}

export default Content