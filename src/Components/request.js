
const API_KEY = process.env.REACT_APP_API_KEY;

const request = {
  getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  getHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
};
export default request;
