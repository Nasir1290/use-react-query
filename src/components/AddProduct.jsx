import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

export default function AddProduct() {
  const initialState = {
    title: "",
    description: "",
    price: "",
    rating: 5,
    thumbnail: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(initialState);
    console.log(state);
  };

  return (
    <div className=" m-2 p-2  w-1/5 h-1/2">
      <h1 className=" text-3xl my-2">Add a Product</h1>

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Product Title"
            required
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Product Title"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Product Title"
            required
            name="price"
            value={state.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="thumbnail"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Thumbnail
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Thumbnail...."
            name="thumbnail"
            value={state.thumbnail}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </form>

      {/* <form className=" flex flex-col max-w-sm mx-auto" onSubmit={handleSubmit}>
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
          value={state.price === 0 ? "" : state.price}
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

        <button
          type="submit"
          className=" bg-black m-auto p-2 rounded-lg text-white text-xl"
        >
          Add Product
        </button>
      </form> */}
    </div>
  );
}
