import axios from "axios"
import { useState, useEffect } from "react"

export function CartedProductsIndex() {
const [cartedProducts, setCartedProducts] = useState ([])

  const getCartedProducts = () => {
    console.log("getting products")
    axios.get("http://localhost:3000/carted_products.json").then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }

  useEffect(getCartedProducts, [])

  return (
    <div>
      <p>This is a shopping Cart</p>



      {cartedProducts.map(cartedProduct => (
        <div key ={cartedProduct.id}>
        {/* <p>{JSON.stringify(cartedProducts)}</p> */}
        <p>name: {cartedProduct.product.name}</p>
        <p>quanity: {cartedProduct.quantity}</p>
      </div>
      ))};
      
    </div>
  )
}