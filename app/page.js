
'use client'; 
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from './search-bar';
import Container from './container';
import './globals.css';
import './search.css';
import { list } from './dummydata.js'; 
const Page = () => {
  const [movies, setMovies] = useState(list); 
  return (
    <div>
      <Search setMovies={setMovies} />
      <Container movies={movies}/>
    </div>
  );
};

export default Page;
