import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function OrdersShow() {
  const [order, setOrder] = useState({
    carted_products: []
  })

  const params = useParams();

  const getOrder = () => {
    console.log("getting order")
    axios.get(`http://localhost:3000/orders/${params.id}.json`).then(response => {
      console.log(response.data);
      setOrder(response.data);
    })
  }

  useEffect (getOrder, []);

  return (
    <div>
       <h1>Order Summary</h1><br/>

          <div key={order.id}>
            {order.carted_products.map(carted_product => (
            <div key={carted_product.id}>
              <h4> {carted_product.product.name}</h4>
              <p><b>quantity:</b> {carted_product.quantity}</p>
              <p><b>subtotal:</b> {order.subtotal}</p>
            <p><b>tax:</b> {order.tax}</p>
            <p><b>total:</b> {order.total}</p><br/>
            </div>
          ))}           
          </div>

    </div>
  )
};