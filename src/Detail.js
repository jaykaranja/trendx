import axios from './axios';
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import axiosrequests from './Requests';
import { useParams } from 'react-router-dom';
import API_KEY from './Requests'
import Row from './Row';
import Footer from './Footer';



function Detail() {

  const [movie, setMovie] = useState([]);

  const { movie_id } = useParams();
 
    useEffect(() => {
    async function fetchData(){
      const request = await axios.get(axiosrequests(movie_id).fetchDetails);
      console.log(request);
      setMovie(request.data);

    }
    fetchData();

  

  },[movie_id]);

  console.log(movie);

  const baseURL = "https://image.tmdb.org/t/p/w500";

  const releasedate = new Date(movie.release_date);

  return (
    <div>
      <Navbar />
      <div className='moviedetails'>
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
          style={{
            backgroundImage: `url("${baseURL}${movie.backdrop_path}?api_key=${API_KEY}")`
          }}
          >
          <div className='movie-title'>
            {movie.original_title}
          </div>
          <div className='movie-data'>
            <div className='data-piece'>
            <i class="fa-solid fa-language"></i>&nbsp;{movie.original_language}
            </div>
            <div className='data-piece'>
            <i class="fa-regular fa-calendar"></i>&nbsp;{releasedate.getFullYear()}
            </div>
            <div className='data-piece'>
            <i class="fa-regular fa-clock"></i>&nbsp;{movie.runtime}m
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
      fetchUrl={axiosrequests().fetchTrendingAll}
      />
      <Footer />
    </div>
  )
}

export default Detail