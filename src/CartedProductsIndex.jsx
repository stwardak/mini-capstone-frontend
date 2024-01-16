import axios from "axios";
import { useState, useEffect } from "react";

export function CartedProductsIndex() {
const [cartedProducts, setCartedProducts] = useState ([]);

  const getCartedProducts = () => {
    console.log("getting products");
    axios.get("http://localhost:3000/carted_products.json").then(response => {
      console.log(response.data);
      setCartedProducts(response.data);
    });
  };

  const createOrder = () => {
    console.log("creating order...");
    axios.post("http://localhost:3000/orders.json").then(response => {
      console.log(response.data);
      window.location.href = `/orders/${response.data.id}`
    });
  };

  useEffect(getCartedProducts, []);

  return (
    <div>
      <p>This is a Shopping Cart</p>



      {cartedProducts.map(cartedProduct => (
        <div key ={cartedProduct.id}>
        {/* <p>{JSON.stringify(cartedProducts)}</p> */}
        <p>name: {cartedProduct.product.name}</p>
        <p>price: {cartedProduct.product.price}</p>
        <p>quanity: {cartedProduct.quantity}</p>
      </div>
      ))}
      <button onClick={createOrder}>Checkout</button>
    </div>
  )
}