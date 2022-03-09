import React from "react";
import './Detail.css'
import { useParams, Link } from "react-router-dom";
import Table from "../components/Table";
import { useEffect, useState } from "react";

export default function Detail() {
    let params = useParams();
    let movie

    const [detailData, setdetailData] = useState([])

    function getMovie(id) {
        return detailData.find(
            (element) => element.imdbID === id
        );
    }

    const getDeatil = () => {
        fetch('http://localhost:3000/details.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            console.log(response)
            return response.json();
        }).then(function (myJson) {
            setdetailData(myJson)
        })
    }

    useEffect(() => {
        getDeatil()
    })
    
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