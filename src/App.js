// import logo from './logo.svg';
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Sidebar from "./components/Sidebar";
import Products from "./components/Pages/Products";
import AddProduct from "./components/Pages/AddProduct";
import ProductDetails from "./components/Pages/ProductDetails";
import EditProduct from "./components/Pages/EditProduct";
// import Contact from "./components/Pages/Contact";

function App() {
  return (
    <div className="App ">
      <Navbar />

      <div className="row d-flex">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/:productID" element={<ProductDetails />} />
            <Route path="products/:productId/edit" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
