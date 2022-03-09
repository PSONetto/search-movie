import React from "react"
import './Content.css'
import { Link } from "react-router-dom"

const capitalize = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function Content(props) {
    let element = props.props
    return (
        <div className="content">
            <div className="name-plate">
                <p className="title">{element.Title}</p>
                <p className="year">{element.Year}</p>
                <p className="type">{capitalize(element.Type)}</p>
            </div>
            <div className="img-container">
                <img className='poster' src={element.Poster} alt={element.Title} />
            </div>
            <div className="details">
                <Link className="link" to={`/details/${element.imdbID}`} key={element.imdbID}>More Details</Link>
            </div>
        </div>
    )
}