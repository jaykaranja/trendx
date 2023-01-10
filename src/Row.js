import React, { useState, useEffect } from 'react'
import axios from './axios';
import API_KEY from './Requests'
import { Link } from "react-router-dom";

function Row({ title, fetchUrl }) {
  const  baseURL = "https://image.tmdb.org/t/p/w200";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();

  }, [fetchUrl])
  
  console.log(movies)

  return (

    <div
    className='category-row'
    style={{
        backgroundColor : "rgba(97, 142, 97, 0.492)",
        width: "90vw",
        borderRadius: "8px",
        marginLeft : "4vw",
        paddingTop: "0.1rem",
        height: "240px",
        marginBottom: "1.5rem",
    }}>
        <h2
        style={{
            marginLeft: "1rem",
            marginTop: "1.5rem",
            color: "rgb(235, 140, 31)",
        }}
        >{ title }</h2>

        <div
        className="rowimages"
        style={{
            overflow: "scroll",           

        }}
        >
            {movies.map((movie) => (
                <Link to={`detail`}>
                <img
                className='movieimage'
                style={{ 
                    opacity: "1",
                    height: "8rem",
                    width: "5.5rem",
                    marginLeft: "15px",
                    marginTop: "10px",
                    
                }}
                key={movie.id}
                src={`${baseURL}${movie.poster_path}?api_key=${API_KEY}`}
                alt={movie.name}
                />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Row;