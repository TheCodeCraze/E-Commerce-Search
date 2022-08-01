import React from "react";
import ItemDiscount from "./ItemDiscount";
import Location from "./Location";
import Rating from "./Rating";
import Button from "./Button";

const ItemText = ({ name, price, badge, location, review }) => {
  return (
    <div className="item-text">
      <h2 className="item-name">{name.slice(0, 68)}</h2>
      <p className="item-price">{price.priceDisplay}</p>
      {price.discount !== 0 && <ItemDiscount price={price} />}
      <Location badge={badge} location={location} />
      {review.count !== 0 && <Rating review={review} />}
      <Button name={name} />
    </div>
  );
};

export default ItemText;
