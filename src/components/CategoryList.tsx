import type { Product, ProductCategory } from "../data/products";
import { getCategories } from "../utils/product";

type Props = {
  items: Product[];
  category: ProductCategory;
  onChange: (category: ProductCategory) => void;
};

export default function CategoryList({ items, category, onChange }: Props) {
  const categories = getCategories(items);

  return (
    <nav className="categories" aria-label="Danh mục sản phẩm">
      <ul className="category-list" role="list">
        {categories.map((item) => (
          <li key={item}>
            <button type="button" aria-pressed={item === category} onClick={() => onChange(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
