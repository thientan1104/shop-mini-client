import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products, type ProductCategory } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const [category, setCategory] = useState<ProductCategory>("iPhone");
  const visibleProducts = filterProducts(products, { category });
  const cheapProducts = filterProducts(products, { maxPrice: 15000000, sort: "asc" });
  const iphones = filterProducts(products, { category: "iPhone" });
  const lowStockProducts = products.filter((product) => product.stock >= 1 && product.stock <= 5);

  return (
    <>
      <Header />
      <main>
        <Banner product={products[0]} />
        <div className="container catalog" id="featured-products">
          <CategoryList items={products} category={category} onChange={setCategory} />
          <ProductList title={category} items={visibleProducts} />
          <ProductList title="Giá đến 15 triệu đồng" items={cheapProducts} />
          <ProductList title="Điện thoại iPhone" items={iphones} />
          <ProductList title="Sản phẩm sắp hết hàng" items={lowStockProducts} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
