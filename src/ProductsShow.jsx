import axios from "axios"

export function ProductsShow(props) {
  const addToCart = (event) => {
    console.log("adding item to cart")  
    event.preventDefault();
    const quantity = event.target.quantity.value;
    if(!quantity || quantity <1) {
      alert("Please enter a valid quantity.");
      return;
    }
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/carted_products.json', params).then(response => {
      console.log(response.data)
      props.onClose()
      window.location.href = "/cart"
    })

    };
  

  return (
    <div>
      <h1>Product Information</h1>
        <p>id: {props.product.id}</p>
        <p>Name: {props.product.name}</p>
        <p>description: {props.product.description}</p>
        <p>price: {props.product.price}</p>      
        <form onSubmit={addToCart}>
          <div>
            <input name="product_id" type="hidden" defaultValue={props.product.id}   />
          </div>
          <div>
          Quantity: <input name="quantity" type="number" min="1" required />
        </div>
          <button type="submit">Add To Cart</button>
        </form>      
    </div>
  );

  }