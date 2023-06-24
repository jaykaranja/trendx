import React, { useState, useEffect } from 'react'
import axios from './axios';
import API_KEY from './Requests'
import { Link } from "react-router-dom";

function Row({ title, fetchUrl }) {
  const  baseURL = "https://image.tmdb.org/t/p/w200";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData(){
        setLoading(true)
        try {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setLoading(false)
        } catch(e){
            console.log(e);
            window.alert("Something went wrong :(")
        }

       
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
    }}> 
        <h2
        style={{
            marginLeft: "4rem",
            color: "rgb(235, 140, 31)",
        }}
        >{ title }</h2>

        <div
        className="rowimages"
        >
            {!loading
            ?
                movies.map((movie) => (
                    <Link to={`/detail/${movie.id}`}>
                    <img
                    className='movieimage'
                    key={movie.id}
                    src={`${baseURL}${movie.poster_path}?api_key=${API_KEY}`}
                    alt={movie.name}
                    />
                    </Link>
                ))
            :
                <>
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                    <div
                        className='movieimage skeleton'
                    />
                </>
            }
            
        </div>
    </div>
  )
}

export default Row;