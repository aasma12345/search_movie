import React, { useState, useEffect } from "react";

const Rating = ({ movieId }) => {
  const storedRatings = JSON.parse(localStorage.getItem("movieRatings")) || {};
  const [rating, setRating] = useState(storedRatings[movieId] || 0);

  useEffect(() => {
    localStorage.setItem(
      "movieRatings",
      JSON.stringify({ ...storedRatings, [movieId]: rating })
    );
  },[rating]);
  const buttons = [];
  for (let i = 1; i <= 5; i++) {
    buttons.push(
        <button key={i} onClick={() => setRating(i)}>
            {i}
        </button>
    );
   }
  return (
    <div>
        <h4 style={{ color: "white" }}>
            <span>⭐</span> {rating}
        </h4>
        {buttons}
    </div>
  );
};
export default Rating;
