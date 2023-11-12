import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  let navigate = useNavigate();
  
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/Products", {
        title,
        price,
        image,
      })
      .then(() => navigate("/products"));
    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form className="w-50 " onSubmit={formSubmit}>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput" className="font-weight-bold">
            Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            name="productTitle"
            type="text"
            className="form-control "
            id="formGroupExampleInput"
            placeholder="Product Title"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput2">Price</label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            name="productPrice"
            type="Number"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Product Price"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput3">Image</label>
          <input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
            type="text"
            name="productImage"
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="Product Image URL"
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
