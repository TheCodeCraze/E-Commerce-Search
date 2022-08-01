import React from "react";
import ItemImg from "./ItemImg";
import ItemText from "./ItemText";

const Item = ({ img, name, price, badge, location, review }) => {
  return (
    <div className="Item">
      <ItemImg img={img} />
      <ItemText
        name={name}
        price={price}
        badge={badge}
        location={location}
        review={review}
      />
    </div>
  );
};

export default Item;
