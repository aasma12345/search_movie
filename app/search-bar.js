"use client";
import React, { useState } from 'react';

const Search = ({ setMovies }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
  }
  const handleSearch = () => {
    if (input.trim() === "") return;

    fetch(`https://www.omdbapi.com/?s=${input}&apikey=c6c606f6`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search ? data.Search : []);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  };
  

  return (
    <div className='container input-raw'>
        <div className='search-title'>Search For Movie/Series</div>
        <div className='search-input'>
            <input 
            type="text" 
            placeholder="Enter..." 
            className='search-box' 
            value={input} 
            onChange={handleChange} 
            />
            <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
    </div>
  );
};
export default Search;
