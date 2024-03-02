import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

export default function AddProduct() {
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  const handleChange = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" m-2 p-2 bg-gray-200 w-1/5 h-1/2">
      <h1 className=" text-3xl my-2">Add a Product</h1>
      <form className=" flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Product Name..."
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <br />

        <textarea
          type="text"
          placeholder="Enter Product Description..."
          name="description"
          value={state.description}
          onChange={handleChange}
        />

        <br />

        <input
          type="number"
          placeholder="Enter Product Price..."
          name="price"
          value={state.price}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          placeholder="Product Thumbnail..."
          name="thumbnail"
          value={state.thumbnail}
          onChange={handleChange}
        />
        <br />
      </form>
    </div>
  );
}
