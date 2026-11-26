import type { Product, ProductCategory } from "../data/products";

export type SortOrder = "asc" | "desc";

export type ProductFilter = {
  keyword?: string;
  category?: string;
  maxPrice?: number;
  sort?: SortOrder;
};

export function getCategories(products: Product[]): ProductCategory[] {
  return [...new Set(products.map((product) => product.category))];
}

export function filterProducts(products: Product[], filter: ProductFilter = {}): Product[] {
  const { keyword = "", category, maxPrice, sort } = filter;
  const kw = keyword.trim().toLowerCase();
  const result = products.filter((product) => {
    const matchKeyword = product.name.toLowerCase().includes(kw);
    const matchCategory = !category || product.category === category;
    const matchPrice = maxPrice === undefined || product.price <= maxPrice;
    return matchKeyword && matchCategory && matchPrice;
  });

  if (sort === "asc") return [...result].sort((a, b) => a.price - b.price);
  if (sort === "desc") return [...result].sort((a, b) => b.price - a.price);
  return result;
}

export function searchByPriceRange(products: Product[], min: number, max: number): Product[] {
  return products.filter((product) => product.price >= min && product.price <= max);
}

export function groupByCategory(products: Product[]): Record<string, number> {
  return products.reduce<Record<string, number>>((groups, product) => {
    groups[product.category] = (groups[product.category] ?? 0) + 1;
    return groups;
  }, {});
}
