const API_KEY = "f8df8bdba5e8db2253b0b90356112dae";


const axiosrequests = (movie_id) => {
     return {
     fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}`, 
     fetchTrendingTV: `/trending/tv/day?api_key=${API_KEY}`,
     fetchTrendingAll: `/trending/all/day?api_key=${API_KEY}`,
     fetchDetails: `/movie/${movie_id}?api_key=${API_KEY}`,
     };

};

export default axiosrequests; 