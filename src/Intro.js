import axios from './axios';
import React, { useEffect, useState } from 'react'
import axiosrequests from './Requests';

function Intro() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(axiosrequests.fetchTrendingMovies);
      console.log(request)
      setMovie(
      );
      
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <div className='intro'>
        <div className='intro-content'>
            <p className='title'>TrendX</p>
            <h3>Where your love of movies is appreciated the most.</h3>
            <br></br>
            <div className='introbtns'>
                <button className='introbtn'>Today's Releases</button>
                <button className='introbtn'>World's Top 10</button>
            </div>
        </div>
        <div className='intro-fadebottom'></div>
    </div>
    
  )
}

export default Intro