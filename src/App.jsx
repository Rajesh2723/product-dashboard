import ProductList from "./components/ProductList";


function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      inStock: true,
    },
    {
      id: 2,
      name: "Mouse",
      price: 1000,
      inStock: false,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2500,
      inStock: true,
    },
  ];

  return (
    <>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
    </>
  );
}

export default App;