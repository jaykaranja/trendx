import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Row from './Row';
import axiosrequests from './Requests';
import React from "react";

function Home() {
  return (
    <div className='container'>
      <Navbar />
      <Intro />
      <Row 
      title='Trending'
      fetchUrl={axiosrequests.fetchTrendingAll}
      />
      <Row 
      title='Top Movies'
      fetchUrl={axiosrequests.fetchTrendingMovies}
      />
      <Row 
      title='Top TV Series'
      fetchUrl={axiosrequests.fetchTrendingTV}
      />
    </div>
  );
}

export default Home;
