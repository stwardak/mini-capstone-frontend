export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };
  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name = "name" type = "text"/>
        </div>
        <div>
          Price: <input name = "price" type = "text"/>
        </div>
        <div>
          Description: <input name = "description" type = "text"/>
        </div>
        <div>
          Supplier ID: <input name = "supplier_id" type = "text"/>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}