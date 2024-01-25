import { useState } from "react";

export function ProductsIndex(props) {
  
  const [searchFilter, setSearchFilter] = useState("");
  

  return (

    <div id="products-index">
      <p>Search: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names"/></p>

      <h1>All Products</h1>
        <div className="row">
         {props.products.filter(
          (product) => product.name.toLowerCase()
          .includes(searchFilter.toLowerCase()) ||
          product.description.toLowerCase().includes(searchFilter.toLowerCase())
         )
         .map((product) => (
          <div key={product.id} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2>{product.name}</h2>
                <img width ="100%" src={product.images[0] && product.images[0].url}/>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <button onClick={() => props.onShowProduct(product)}>More Info</button>
               </div>
             </div>   
           </div>
        ))}
      </div>
     </div>
  );
}





// pick up here: Make a new src/PhotosShow.jsx file that renders attributes from props
