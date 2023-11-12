import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const { productId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9000/Products/${productId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [productId]);

  let navigate = useNavigate();

  const editFormSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:9000/Products/${productId}`, {
      title: item.title,
      price: item.price,
      image: item.image,
    });
    navigate("/products");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully updated",
      showConfirmButton: false,
      timer: 1800,
    });
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form className="w-50 " onSubmit={editFormSubmit}>
        <div className="form-group my-2">
          <label htmlFor="titleInput" className="font-weight-bold">
            Title
          </label>
          <input
            value={item.title}
            name="productTitle"
            type="text"
            className="form-control "
            id="titleInput"
            placeholder="Product Title"
                      onChange={(e) => setItem({ ...item, title: e.target.value })}
                  />
        </div>
        <div className="form-group my-2">
          <label htmlFor="PriceInput">Price</label>
          <input
            value={item.price}
            name="productPrice"
            type="Number"
            className="form-control"
            id="PriceInput"
            placeholder="Product Price"
            onChange={(e) => setItem({ ...item, price: e.target.value })}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="ImageUrlInput">Image</label>
          <input
            value={item.image}
            type="text"
            name="productImage"
            className="form-control"
            id="ImageUrlInput"
            placeholder="Product Image URL"
            onChange={(e) => setItem({ ...item, image: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
