import axios from './axios';
import React, { useState, useEffect } from 'react'
import axiosrequests from './Requests';
import { useParams } from 'react-router-dom';
import { API_KEY } from './Requests'
import Row from './Row';

function Detail() {
  const [movie, setMovie] = useState([]);
  const { movie_id } = useParams();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  async function fetchData(){
    setLoading(true)
    try {
      const request = await axios.get(axiosrequests(movie_id).fetchDetails);
      setMovie(request.data);
      setLoading(false)
    } catch(e) {
      console.log(e);
      window.alert("Film information could not be fetched. :(")
      setLoading(true)
    }
  }
  fetchData();
  },[movie_id]);

  const baseURL = "https://image.tmdb.org/t/p/w500";
  const releasedate = new Date(movie.release_date);
  window.scrollTo( 0,0 );

  return (
    <>
      <div className='moviedetails' id='switchBg'>
        {loading 
        ?
        <div
          className='movie-image-holder skeleton'
        ></div>
        :
        <img 
          src={`${baseURL}${movie.poster_path}?api_key=${API_KEY}`}
          alt={(movie.title)}
          className='movie-image-holder'
        ></img>
        }
        <div
          className='movietd'
          >
          <div className='movie-title' id='movie-title'>
            {loading
            ?
            <div className='skeleton-text skeleton'></div>
            :
              <>{movie.original_title}</>
            }
          </div>
          <div className='movie-data'>
            {loading 
            ?
              <div className='data-piece skeleton'>
              </div>
            :
              <div className='data-piece'>
                <i className="fa-solid fa-language"></i>&nbsp;&nbsp;{movie.original_language}
              </div>
            }
            {loading
            ?
              <div className='data-piece skeleton'>
              </div>
            :
              <div className='data-piece'>
                <i className="fa-regular fa-calendar data-piece-release"></i>&nbsp;&nbsp;{releasedate.getFullYear()}
              </div>
            }
            {loading
            ?
              <div className='data-piece skeleton'>
              </div>
            :
              <div className='data-piece'>
                <i className="fa-regular fa-clock data-piece-duration"></i>&nbsp;&nbsp;{movie.runtime}m
              </div>
            }
            {loading
            ?
              <div className='data-piece skeleton'>
              </div>
            :
              <div className='data-piece'>
                <i className="fa-solid fa-spinner data-piece-status"></i>&nbsp;&nbsp;{movie.status}
              </div>
            }
          </div>
          <div className='movie-overview' id="movie-overview">
            {loading
            ?
            <>
            <div className='skeleton-text skeleton'></div>
            <div className='skeleton-text skeleton'></div>
            <div className='skeleton-text skeleton'></div>
            <div className='skeleton-text skeleton'></div>
            </>
            :
              <>{movie.overview}</>
            }
          </div>
        </div>
      </div>
      {/* <div className='moviedetails' id='switchBg'>
        <img src={`${baseURL}${movie.poster_path}?api_key=${API_KEY}`}
              alt={(movie.title)}
              className='movie-image-holder skeleton'
        ></img>
        <div
          className='movietd'
          >
          <div className='movie-title'>
            <div className='text-skeleton skeleton'></div>
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
      </div> */}
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