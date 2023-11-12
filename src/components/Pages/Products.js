import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const [Products, setProducts] = useState([]);
  //function to get all products
  const getAllProducts = function () {
    fetch("http://localhost:9000/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //Handling delete of a product
  const deletePrduct = function (productId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:9000/Products/${productId}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then(() => getAllProducts());
      }
    });
  };
  return (
    <div>
      <h2> Our Products</h2>
      <Link to="add" className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-striped mt-3">
        <thead className="text-center">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            {/* <th scope="col">Price</th> */}
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product) => {
            return (
              <tr className="text-center" key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                {/* <td>{product.price}</td> */}
                <td>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btn-sm"
                    target="blank"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/products/${product.id}/edit`}
                    className="btn btn-primary btn-sm mx-2 "
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      deletePrduct(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
