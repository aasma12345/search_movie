import React from 'react';
const Movie = ({ list }) => {
    let savedRatings = {};
    if (typeof window !== "undefined") {
      savedRatings = JSON.parse(localStorage.getItem("movieRatings")) || {};
    }
    
  return (
    <div className="movies">
        <img  className= "data-img" src={list.Poster}/>
        <h2 className="data-title">{list.Title}</h2>
        <p className="data-plot">{list.Plot}</p><br/>
        <p className="data-year">Year:-{list.Year}</p>
        <p className="data-rating">Type:-{list.Type}</p>
        <h4 className='h4'>
            <span >⭐</span> {savedRatings[list.imdbID] || "0"}
        </h4>
        <a href={`/details?imdbID=${list.imdbID}`} className="button">
            Click to read more
        </a> 
    </div> 
  )
} 
export default Movie;

