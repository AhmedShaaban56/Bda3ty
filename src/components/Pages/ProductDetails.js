import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const api_url = "http://localhost:9000/Products";
  const Params = useParams();
  const [Item, setItem] = useState([]);
  useEffect(() => {
    fetch(`${api_url}/${Params.productID}`)
      .then((res) => res.json())
      .then((Item) => setItem(Item))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Params.productID]);
  return (
    <div className="itemdetails">
      <img src={Item.image} alt="" className="Item-image" />
      <h3>{Item.title}</h3>
      <p>{Item.description}</p>
      <h5>
        Price: <span style={{ color: "red" }}>{Item.price} $</span>
      </h5>
    </div>
  );
}

export default ProductDetails;
