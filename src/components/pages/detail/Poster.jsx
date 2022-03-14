import React from 'react'
import './Poster.css'

function Poster(props) {
    return (
        <aside className='poster'>
            <div className='title'>
                <h1>{props.work.Title}</h1>
                <h2>{props.work.Year}</h2>
            </div>
            <div className='image'>
                <img src={props.work.Poster} alt={props.work.Title} />
            </div>
        </aside>
    )
}

export default Poster