// Chạy: node playground/test-cart.ts
import { products } from "../src/data/products.ts";
import { addToCart, updateQuantity, removeFromCart, countItems, calcTotal } from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import { filterProducts, getCategories, searchByPriceRange, groupByCategory } from "../src/utils/product.ts";

let cart: CartItem[] = [];
cart = addToCart(cart, products[0]);
cart = addToCart(cart, products[0], 2);
cart = addToCart(cart, products[3]);
console.log("Số sản phẩm:", countItems(cart));
console.log("Tổng tiền:", formatPrice(calcTotal(cart)));

cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[3].id);
console.log(cart.map((item) => `${item.product.name} x${item.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "iPhone, giá tăng dần:",
  filterProducts(products, { category: "iPhone", sort: "asc" }).map((p) => p.name)
);
console.log(
  "Tìm 'iPad', tối đa 15 triệu:",
  filterProducts(products, { keyword: "iPad", maxPrice: 15000000 }).map((p) => p.name)
);

console.log(
  "Khoảng giá từ 10 đến 15 triệu:",
  searchByPriceRange(products, 10000000, 15000000).map((p) => `${p.name} — ${p.details}`)
);
console.log("Số sản phẩm theo danh mục:", groupByCategory(products));
