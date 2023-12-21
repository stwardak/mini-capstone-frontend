export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          {/* <p><img src={product.images.first}/></p> */}
          <h3>${product.price}</h3>
          <p>{product.description}</p>
        </div>
      ))
      }
    </div>
  )
}