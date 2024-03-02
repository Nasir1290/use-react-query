import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const retrieveProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  const data = response.data;
  return data;
};

export default function ProductsList() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
  });

  if (isLoading) {
    return <div> Fetching Data.....</div>;
  }

  if (error) {
    return <div>Error while fetching data {error.message}</div>;
  }
  return (
    <div className=" flex flex-col justify-center items-center w-3/5">
      <h1 className=" text-3xl font-bold">All Prodcts</h1>
      <ul className=" flex flex-wrap justify-center items-center">
        {products?.map((product) => (
          <li className=" flex flex-col items-center m-2 border rounded-sm" key={product.id}>
            <p>{product.title}</p>
            <img className=" object-cover h-64 w-96 rounded-sm" src={product.thumbnail} alt="product image" />
          </li>
        ))}
      </ul>
    </div>
  );
}
