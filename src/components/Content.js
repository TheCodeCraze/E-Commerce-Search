import React, { useEffect, useState } from "react";
import Item from "./Item";

const Content = ({ searchTerm, currentPage, setCurrentPage, setProduct }) => {
  const [products, getProducts] = useState(null);
  const [val, setVal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (searchTerm !== "") {
        const res = await fetch(
          `https://www.blibli.com/backend/search/products?searchTerm=${searchTerm}&start=${currentPage}&itemPerPage=24`
        );
        if (res.status === 200) {
          const data = await res.json();
          getProducts(data.data.products);
          setCurrentPage(0);
          setProduct(true);
          setVal(false);
        } else {
          getProducts(null);
          setProduct(false);
          setVal(true);
        }
      } else {
        getProducts(null);
        setProduct(false);
        setVal(false);
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
      {!val ? (
        !products ? (
          <h4>Search for products</h4>
        ) : null
      ) : (
        <h4>No products found</h4>
      )}
    </section>
  );
};

export default Content;
