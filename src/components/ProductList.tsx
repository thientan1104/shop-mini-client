import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

type Props = {
  id?: string;
  title: string;
  items: Product[];
};

export default function ProductList({ id, title, items }: Props) {
  return (
    <section id={id} className="container featured-products">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
