import React, { useState, useEffect } from 'react'
import axios from './axios';
import API_KEY from './Requests'
import { useParams, Link } from "react-router-dom";

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
  
  return (

    <div
    className='category-row'
    style={{
        backgroundColor : "#000000b1",
        width: "100%",
        borderRadius: "20px",
        paddingTop: "0.1rem",
        height: "auto",
        marginBottom: "1.5rem",
    }}> 
        <h2
        style={{
            marginLeft: "4rem",
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
                <Link to={`/detail/${movie.id}`}>
                <img
                className='movieimage'
                style={{ 
                    opacity: "1",
                    marginLeft: "25px",
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