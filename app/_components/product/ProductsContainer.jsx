"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import SortComponent from "./SortComponent";
import Search from "./Search";

const ProductsContainer = () => {
  const [sort, setsort] = useState("");
  const [allproducts, setAllproducts] = useState([]);

  const fetchAllProducts = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products?sort=${sort}`
    );

    return data;
  };

  const { data, status } = useQuery({
    queryKey: ["getproducts", sort],
    queryFn: fetchAllProducts,
  });

  //
  useEffect(() => {
    if (data?.length > 0) {
      setAllproducts(data);
    }
  }, [data]);

  const handleSort = (e) => {
    setsort(e.target.value);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const newdata = data.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setAllproducts(newdata);
  };

  return (
    <div>
      <div className="flex justify-between flex-wrap items-center gap-y-3">
        <SortComponent sort={sort} handleSort={handleSort} />
        <Search handleSearch={handleSearch} />
      </div>

      <div className=" grid  md:grid-cols-4 gap-9 my-5">
        {status === "pending" ? (
          <LoadingComponent />
        ) : status === "error" ? (
          <div className="text-center text-red-600 mt-4 text-4xl capitalize">
            Error while geting Products we will tray again later
          </div>
        ) : (
          allproducts.map((item, i) => <ProductCard key={i} item={item} />)
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
