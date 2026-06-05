import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const availableProducts = products.filter(
    (product) => product.inStock
  );

  if (availableProducts.length === 0) {
    return <p>No products in stock.</p>;
  }

  return (
    <main>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </main>
  );
}

export default ProductList;