import { ProductsIndex } from "./ProductsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { ProductsShow } from "./ProductsShow";
import { CartedProductsIndex} from "./CartedProductsIndex";

export function Content() {

  const [products,setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };




  return (
    <div className="container">
    
      <Routes>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/" element = {< ProductsIndex products = {products} onShowProduct={handleShowProduct}/>}/>
        <Route path = "/products/new" element = {<ProductsNew onCreateProduct={handleCreateProduct}/>}/>
        {/* <Route path ="/products/show" element = {< ProductsShow products = {products} onShowProduct={handleShowProduct}/>}/> */}
        <Route path="/carted_products" element = {<CartedProductsIndex/>}/>
      </Routes>
      
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product = {currentProduct}/>
      </Modal>

    </div>
  );
}