import axios from 'axios';

const apiKey = '3e7e26576f5e49f139e024ff6fe28ff1';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
   const res = await axios
      .get(`/trending/all/day?api_key=${apiKey}`);
   return res.data.results;
};
const fetchMoviesWithQuery = async query => {
   const res = await axios
      .get(
         `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
      );
   return res.data.results;
};
const fetchMovieDetails = async movieId => {
   const res = await axios
      .get(`/movie/${movieId}?api_key=${apiKey}&language=en-US`);
   return res.data;
};
const fetchMovieCast = async movieId => {
   const res = await axios
      .get(`/movie/${movieId}/credits?api_key=${apiKey}`);
   return res.data.cast;
};
const fetchMovieReviews = async movieId => {
   const res = await axios
      .get(`/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`);
   return res.data.results;
};

const moviesApi = { fetchTrendingMovies, fetchMoviesWithQuery, fetchMovieDetails, fetchMovieCast, fetchMovieReviews };

export default moviesApi