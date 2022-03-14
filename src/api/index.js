import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
})


export const getWorks = callback => {
    fetch('movie.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        callback(myJson)
    })
}

/* export const getDetails = callback => {
    fetch('http://localhost:3000/details.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        callback(myJson)
    })
} */

export const getDetails = callback => {
    api.get('/details.json').then(function (myJson) {
        callback(myJson.data)
    })
}