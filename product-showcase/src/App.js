import './App.css';
function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image}
        alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <span className="price">${props.price}</span>
      <button onClick={() => alert(`Added ${props.name} to cart!`)}> Add to Cart</button>

    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Product Showcase</h1>
      <ProductCard
        name="Gaming Laptop Pro"
        description="A high-performance laptop designed for gaming enthusiasts."
        price={1299}
        image="/images/laptop.png"
      ></ProductCard>

      <ProductCard
        name="Iphone 17 Pro"
        description="The latest smartphone with cutting-edge features and sleek design."
        price={999}
        image="/images/phone.png"
      ></ProductCard>

      <ProductCard
        name="Headphones X200"
        description="Premium noise-cancelling headphones with crystal-clear sound quality."
        price={199}
        image="/images/headphone.png"
      ></ProductCard>
    </div>

    
  );
}

export default App;
