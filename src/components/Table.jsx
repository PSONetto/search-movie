import React from "react"
import './Table.css'
import { Link } from "react-router-dom"

export default function Table(props) {
    let element = props.props
    return (
        <div className="info">
            <div className="general">
                <div>Rated: {element.Rated}</div>
                <div>Released: {element.Released}</div>
                <div>Runtime: {element.Runtime}</div>
                <div>Genre: {element.Genre}</div>
                <div>Director: {element.Director}</div>
                <div>Writer: {element.Writer}</div>
                <div>Actors: {element.Actors}</div>
                <div>Languages: {element.Language}</div>
                <div>Country: {element.Country}</div>
                <div>Awards: {element.Awards}</div>
            </div>
            <div className="plot">Plot: {element.Plot}</div>
            <div className="ratings">
                <div>Ratings: </div>
                {element.Ratings.map((e, i) => {
                    console.log(e.Source)
                    return <div>{e.Source}: {e.Value}</div>
                })}
                <div>Metascore: {element.Metascore}</div>
                <div>imdbRating: {element.imdbRating}</div>
            </div>
            <div className="others">
                <div>imdbVotes: {element.imdbVotes}</div>
                <div>imdbID: {element.imdbID}</div>
                <div>Type: {element.Type}</div>
                <div>DVD: {element.DVD}</div>
                <div>BoxOffice: {element.BoxOffice}</div>
                <div>Production: {element.Production}</div>
                <div>Website: {element.Metascore}</div>
            </div>
            <Link className="return" to={`/`}>Return</Link>
        </div >

    )
}