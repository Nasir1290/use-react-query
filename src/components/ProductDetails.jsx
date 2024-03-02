import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function ProductDetails({ id }) {
  const retrieveProduct = async ({ queryKey }) => {
    const response = await axios.get(
      `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
    );
    return response.data;
  };

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProduct,
  });

  if (isLoading) {
    return <div>Fetching Product....</div>;
  }
  if (error) {
    return <div>An Error Occured : {error.message}</div>;
  }

  return (
    <div className=" w-1/5">
      <h1 className=" text-3xl my-2">Product Details</h1>
      <div className=" flex flex-col p-1 rounded border bg-gray-100 text-md justify-center ">
        <img
          className=" object-contain border-amber-400 border-4 h-34 w-34 p-2 bg-blue-400 rounded-full m-auto"
          src={product.thumbnail}
          alt={product.title}
        /> 
        <p>
          <u className="font-bold">Name</u>:{product.title}
        </p>
        <br />
        <p>
          <u className="font-bold">Description</u>
          {product.description}
        </p>
        <br />
        <p>Price:{product.price}💲</p>
        <p>
          Rating:{" "}
          {Array.from(
            { length: Math.round(product.rating) },
            (_, index) => "⭐"
          ).join("")}{" "}
        </p>
      </div>
    </div>
  );
}
