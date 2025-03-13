
"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Rating from "../rating.js";
const MovieDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const imdbID = searchParams.get("imdbID");
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (!imdbID) return;

    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=c6c606f6`)
       .then((response) => response.json())
       .then((data) => {
            if (data.Response === "True") {
            setMovie(data);
            } else {
             setMovie(null);
            }
        })
    },[imdbID]);
  if (!movie) return <h2>Movie Not Found</h2>;
  return (
    <div className="container">
        <div className="row align-items-center d">
            <div className="col-md-6 text-center">
                <img className="data-imge" src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="col-md-6">
                <h2 className="data-title">{movie.Title}</h2>
                <p className="data-plot">{movie.Plot}</p>
                <p className="data-released">Released: {movie.Released }</p>
                <p className="data-actors">Actors: {movie.Actors}</p>
                <p className="data-language">Language: {movie.Language}</p>
                <p className="data-genre">Genre: {movie.Genre }</p>
                <Rating movieId={imdbID} />
                <button onClick={() => router.back()} className="back-button">
                  Go Back
                </button>
          </div>
      </div>
    </div>
  );
};

const MovieDetailcontent = () => (
  <Suspense fallback={<h2>Loading...</h2>}>
    <MovieDetails />
  </Suspense>
);

export default MovieDetailcontent;



