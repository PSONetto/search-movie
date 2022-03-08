import React from "react"
import './Details.css'
import { Link, Outlet } from "react-router-dom";
import { movieDetail } from "../api/movieDB";


export default function Details() {
    return (
        <div>
            <nav>
                {movieDetail.map((movie) => (
                    <Link to={`/details/${movie.imdbID}`} key={movie.imdbID}>
                        {movie.Title}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}