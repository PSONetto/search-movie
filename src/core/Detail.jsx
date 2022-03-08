import React from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../api/movieDB"

function getMovie(id) {
    return movieDetail.find(
        (element) => element.imdbID === id
    );
}

export default function Detail() {
    let params = useParams();
    let movie = getMovie(params.id);
    return (
        <main>
            <h2>Title: {movie.Title}</h2>
            <p>
                {movie.Type}: {movie.yEAR}
            </p>
            <p>Actors: {movie.Actors}</p>
        </main>
    );
}