import Intro from './Intro';
import Row from './Row';
import axiosrequests from './Requests';
import React from "react";

function Home() {
  return (
    <>
      <Intro />
      <Row 
      title='Trending'
      fetchUrl={axiosrequests().fetchTrendingAll}
      />
      <Row 
      title='Top Movies'
      fetchUrl={axiosrequests().fetchTrendingMovies}
      />
      <Row 
      title='Top TV Series'
      fetchUrl={axiosrequests().fetchTrendingTV}
      />
    </>
  );
}

export default Home;
