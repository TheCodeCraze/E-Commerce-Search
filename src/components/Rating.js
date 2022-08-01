import React from "react";

const Rating = ({ review }) => {
  return (
    <div className="Rating">
      <span role="img" aria-label="rating star">
        ⭐
      </span>
      <p className="value">{review.absoluteRating}</p>
      <p className="count">({review.count})</p>
    </div>
  );
};

export default Rating;
