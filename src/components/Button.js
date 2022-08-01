import React from "react";

const Button = ({ name }) => {
  return (
    <button
      className="item-select"
      onClick={() => alert(`${name} added to cart`)}
    >
      BUY NOW
    </button>
  );
};

export default Button;
