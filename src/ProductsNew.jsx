import axios from "axios"
import { useEffect, useState } from "react";

export function ProductsNew(props) {

  const [suppliers, setSuppliers] = useState ([])
  const [images, setImages] = useState([""])

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
    console.log("creating product...");
  };

  const productsIndex = () => {
    console.log("helloooo from products index");
    axios.get("http://localhost:3000/suppliers.json").then(response => {
      console.log(response.data);
      setSuppliers(response.data);
    })
  }

  const addImage = () => {
    console.log('addding image')
    // add an element to the array
    // suppliers.push('')
    setImages([...images, '']);
  }

  useEffect(productsIndex, [])


  return (
    <div>
      <h2>Add a Product</h2>
      {/* {suppliers.map(supplier => (
        <p key={supplier.id}>{supplier.name}</p>
        
      ))} */}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name = "name" type = "text"/>
        </div>
        <div>
          Price: <input name = "price" type = "text"/>
        </div>
        <div>
        {images.map(image => (          
          <p>Image<input name="images[]" type="text" /></p>        
        ))}
        </div>
        <div>
          Description: <input name = "description" type = "text"/>
        </div>
        <div>
          Supplier: <select name="supplier" id="supplierSelect">
          {suppliers.map(supplier => (
           <option key={supplier.id}>{supplier.name}</option>

          ))}          
        </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
      <p><button onClick={addImage}>add more images</button></p>
    </div>
  )
}