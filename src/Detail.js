import axios from './axios';
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import axiosrequests from './Requests';
import { useParams } from 'react-router-dom';



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



  
  return (
    <div>
        <Navbar />
        <div
          style={{
            marginTop : "3rem",
            marginLeft: "3rem",
            color: "rgb(235, 140, 31)",
          
          }}
        > The movie clicked above is called 
        <span
          style={{
            color: "rgb(75, 238, 75)",
          }}
        > {movie.title}</span></div>
    </div>
  )
}

export default Detail