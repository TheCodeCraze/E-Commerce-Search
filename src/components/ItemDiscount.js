import React from "react";

const ItemDiscount = ({ price }) => {
  return (
    <div className="item-discount">
      <p className="org-price">{price.strikeThroughPriceDisplay}</p>
      <div className="discount">
        <p>{price.discount}%</p>
      </div>
    </div>
  );
};

export default ItemDiscount;
