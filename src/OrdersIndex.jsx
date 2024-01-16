import { useState, useEffect } from "react";
import axios from "axios";


export function OrdersIndex() {
  
  const [orders, setOrders] = useState ([]);

  const getOrders = () => {
    console.log("getting orders");
    axios.get("http://localhost:3000/orders.json").then(response => {
      console.log(response.data);
      setOrders(response.data);
    });
  };

  useEffect(getOrders, []);


  return (
    <div>
       <h1>Orders</h1>
       {orders.map(order => (
          <div key={order.id}>
            <p>subtotal: {order.subtotal}</p>
            <p>tax: {order.tax}</p>
            <p>total: {order.total}</p>
            Products in your order:
          {order.carted_products.map(carted_product => (
            <div key={carted_product.id}>
              <p>name: {carted_product.product.name}</p>
              <p>quantity: {carted_product.quantity}</p>
              {/* <img width="300px" src={carted_product.product_images[0].url} />  */}
              {/* will add images later */}
            </div>
          ))};            
          </div>
       ))};
    </div>
  );
};
