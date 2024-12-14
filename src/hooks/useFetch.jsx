import { useState, useEffect } from "react";
import { options } from "../utils/option";

const useFetch = (apiPath, queryTerm) =>{
    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchMovies(){


//             // Upcoming
// https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1

// // Movie Details
// https://api.themoviedb.org/3/movie/movie_id?language=en-US

// // Search
// https://api.themoviedb.org/3/search/movie?query=hello&include_adult=false&language=en-US&page=1


            const response = await fetch(`https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`, options);

            const data = await response.json();

            setData(data.results)

        }
        fetchMovies();
    }, [apiPath, queryTerm])

    return{
        data
    }
}


export default useFetch