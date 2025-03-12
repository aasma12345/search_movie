import React from 'react';
import Movie from './movie';
const Container = ({ movies }) => {
    return (
      <div className='container'>
        <div className="row">
            {movies.length > 0 &&
                movies.map((movie, index) => (
                <div className="col-12 col-md-4" key={index}>
                    <Movie list={movie} />
                </div>
                ))
            }
        </div>
    </div>
    );
};
export default Container;



