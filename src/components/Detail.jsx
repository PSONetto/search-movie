import React from "react";
import './Detail.css'
import { useParams, Link } from "react-router-dom";
import { movieDetail } from "../api/movieDB"
import Table from "./Table";

function getMovie(id) {
    return movieDetail.find(
        (element) => element.imdbID === id
    );
}

export default function Detail() {
    let params = useParams();
    let movie

    try {
        movie = getMovie(params.id);
        return (
            <main className="detailed-content">
                <div className="presentation">
                    <div className="name-plate">
                        <h1>{movie.Title}</h1>
                        <h2>{movie.Year}</h2>
                    </div>
                    <div className="image">
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                </div>
                <Table props={movie} />
            </main>
        );
    } catch {
        return (
            <div className="no-data">
                <h1>No data about it</h1>
                <Link className="return-no-data" to={`/`}>Return</Link>  
            </div>
        )
    }

}