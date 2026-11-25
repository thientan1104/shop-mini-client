import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

type Props = {
  title: string;
  items: Product[];
};

export default function ProductList({ title, items }: Props) {
  return (
    <section className="container">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
