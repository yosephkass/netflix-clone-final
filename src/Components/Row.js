import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, getURL, isLargeRow }) {
  const [movie, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(getURL);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [getURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {/* __ is Block Element Modifier */}
        {movie.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            // className="row__poster"
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            // src={`${base_url}${movie.poster_path}`} // template literal??
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;

// ${isLargeRow && "row__posterLarge"}
// src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
