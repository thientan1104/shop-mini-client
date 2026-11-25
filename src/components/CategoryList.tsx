import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = [...new Set(items.map((product) => product.category))];

  return (
    <section className="container categories" aria-labelledby="categories-title">
      <h2 id="categories-title" className="section-title">Danh mục sản phẩm</h2>
      <ul className="category-list" role="list">
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </section>
  );
}
