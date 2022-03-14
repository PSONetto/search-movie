import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../../../utils/capitalize'
import './Card.css'

function Card(props) {
    return (
        <li className='card'>
            <div className='name-plate'>
                <p className='title'>{props.work.Title}</p>
                <p className='year'>{props.work.Year}</p>
                <p className='type'>{capitalize(props.work.Type)}</p>
            </div>
            <div className='img-container'>
                <img className='thumbnail' src={props.work.Poster} alt={props.work.Title} />
            </div>
            <div className='sub-plate'>
                <Link className='link' to={`/${props.work.imdbID}`}>More Details</Link>
            </div>
        </li>
    )
}

export default Card