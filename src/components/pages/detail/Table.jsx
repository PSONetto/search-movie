import React from 'react'
import { Link } from 'react-router-dom'
import './Table.css'

export default function Table(props) {
    return (
        <aside className='info'>
            <ul className='general'>
                <li>Rated: {props.work.Rated}</li>
                <li>Released: {props.work.Released}</li>
                <li>Runtime: {props.work.Runtime}</li>
                <li>Genre: {props.work.Genre}</li>
                <li>Director: {props.work.Director}</li>
                <li>Writer: {props.work.Writer}</li>
                <li>Actors: {props.work.Actors}</li>
                <li>Languages: {props.work.Language}</li>
                <li>Country: {props.work.Country}</li>
                <li>Awards: {props.work.Awards}</li>
            </ul>
            <section className='plot'>Plot: {props.work.Plot}</section>
            <ul className='ratings'>
                {props.work.Ratings.map((e, i) => {
                    return <li key={e.Source}>{e.Source}: {e.Value}</li>
                })}
                <li>Metascore: {props.work.Metascore}</li>
                <li>imdbRating: {props.work.imdbRating}</li>
            </ul>
            <ul className='others'>
                <li>imdbVotes: {props.work.imdbVotes}</li>
                <li>imdbID: {props.work.imdbID}</li>
                <li>Type: {props.work.Type}</li>
                <li>DVD: {props.work.DVD}</li>
                <li>BoxOffice: {props.work.BoxOffice}</li>
                <li>Production: {props.work.Production}</li>
                <li>Website: {props.work.Metascore}</li>
            </ul>
            <Link className='return' to={`/`}>Return</Link>
        </aside >
    )
}