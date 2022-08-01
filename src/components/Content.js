import React, { useEffect, useState } from "react";
import Item from "./Item";

const Content = ({ searchTerm, currentPage }) => {
  const [products, getProducts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (searchTerm !== "") {
        const res = await fetch(
          `https://www.blibli.com/backend/search/products?searchTerm=${searchTerm}&start=${currentPage}&itemPerPage=24`
        );
        const data = await res.json();
        getProducts(data.data.products);
      } else {
        getProducts(null);
      }
    };
    getData();
  }, [searchTerm, currentPage]);

  return (
    <section className="Content">
      {products &&
        products.map((product) => (
          <Item
            key={product.id}
            img={product.images[0]}
            name={product.name}
            price={product.price}
            badge={product.badge.merchantBadgeUrl}
            location={product.location}
            review={product.review}
          />
        ))}
    </section>
  );
};

export default Content;
