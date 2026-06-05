import styles from "./ProductCard.module.css";
import { Card, CardContent, Button } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card
      className={
        product.inStock
          ? styles.inStock
          : styles.outOfStock
      }
    >
      <CardContent>
        <h2>{product.name}</h2>

        <p>Price: ₹{product.price}</p>

        <p>
          {product.inStock
            ? "In Stock"
            : "Out of Stock"}
        </p>

        <Button
          variant="contained"
          disabled={!product.inStock}
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;