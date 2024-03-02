import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
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
    retry: false,
  });

  if (isLoading) {
    return <div> Fetching Data.....</div>;
  }

  if (error) {
    return <div>Error while fetching data=: {error.message}</div>;
  }
  return (
    <div className=" flex flex-col justify-center items-center w-3/5 rounded-md ">
      <h1 className=" text-3xl font-bold">All Products</h1>
      <ul className=" flex flex-wrap justify-center items-center">
        {products?.map((product) => (
          <li
            className=" flex flex-col items-center m-2 border rounded-md bg-blue-200 p-2"
            key={product.id}
          >
            <p className=" text-xl font-bold">{product.title}</p>
            <img
              className=" object-contain h-64 w-96 rounded-sm"
              src={product.thumbnail}
              alt="product image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
