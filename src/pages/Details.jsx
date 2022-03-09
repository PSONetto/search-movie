import React from "react"
import './Details.css'
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details() {
    const [detailData, setdetailData] = useState([])

    const getDeatil = () => {
        fetch('http://localhost:3000/details.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            setdetailData(myJson)
        })
    }

    useEffect(() => {
        getDeatil()
    })


    return (
        <div>
            <nav>
                {detailData.map((movie) => (
                    <Link to={`/details/${movie.imdbID}`} key={movie.imdbID}>
                        {movie.Title}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}