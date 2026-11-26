import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

type Props = {
  title: string;
  items: Product[];
};

export default function ProductList({ title, items }: Props) {
  return (
    <section className="featured-products" aria-label={title}>
      <div className="section-heading">
        <h2>{title}</h2>
        <p aria-live="polite">{items.length} sản phẩm</p>
      </div>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
