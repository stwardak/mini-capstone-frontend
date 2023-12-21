import { ProductsIndex } from "./ProductsIndex";
import axios from "axios";
import {useState, useEffect} from "react";
import { ProductsNew } from "./ProductsNew";
import {Modal} from "./Modal";


export function Content() {

  const [products,setProducts] = useState([]);
  const [isProductShowVisable, setIsProductShowVisable] = useState(false);
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

  const 

  return (
    <div>
      <h1>Welcome to React!</h1>
      <ProductsIndex products = {products}/>
      <ProductsNew onCreateProduct={handleCreateProduct}/>
      <Modal show={true}>
        <p>test</p>
      </Modal>
    </div>
  );
}