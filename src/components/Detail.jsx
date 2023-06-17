import axios from './axios';
import React, { useState, useEffect } from 'react'
import axiosrequests from './Requests';
import { useParams } from 'react-router-dom';
import { API_KEY } from './Requests'
import Row from './Row';

function Detail() {
  const [movie, setMovie] = useState([]);
  const { movie_id } = useParams();

  useEffect(() => {
  async function fetchData(){
    const request = await axios.get(axiosrequests(movie_id).fetchDetails);
    setMovie(request.data);
    console.log(`${baseURL}${movie.backdrop_path}?api_key=${API_KEY}`)
    const html = document.getElementById("switchBg");
    html.style.backgroundImage = `url("${baseURL}${request.data.poster_path}?api_key=${API_KEY}")`;
  }
  fetchData();
  },[movie_id]);

  const baseURL = "https://image.tmdb.org/t/p/w500";
  const releasedate = new Date(movie.release_date);
  window.scrollTo( 0,0 );

  return (
    <>
      <div className='moviedetails' id='switchBg'>
        <div 
          className='movie-image'
          style={{
            
          }} 
          >
          <img src={`${baseURL}${movie.poster_path}?api_key=${API_KEY}`}
                alt={(movie.title)}
                style= {{
                width: "350px",
                }}></img>
          
        </div>
        <div
          className='movietd'
          >
          <div className='movie-title'>
            {movie.original_title}
          </div>
          <div className='movie-data'>
            <div className='data-piece'>
            <i className="fa-solid fa-language"></i>&nbsp;&nbsp;{movie.original_language}
            </div>
            <div className='data-piece'>
            <i className="fa-regular fa-calendar"></i>&nbsp;&nbsp;{releasedate.getFullYear()}
            </div>
            <div className='data-piece'>
            <i className="fa-regular fa-clock"></i>&nbsp;&nbsp;{movie.runtime}m
            </div>
            <div className='data-piece'>
            <i className="fa-solid fa-spinner"></i>&nbsp;&nbsp;{movie.status}
            </div>
          </div>
          <div className='movie-overview'>
            {movie.overview}
          </div>
        </div>
      </div>
      <Row 
      title='Other titles you might be interested in'
      fetchUrl={axiosrequests().fetchTrendingAll}
      />
      <Row 
      title='Other trending titles at the moment'
      fetchUrl={axiosrequests().fetchTrendingMovies}
      />
    </>
  )
}

export default Detail