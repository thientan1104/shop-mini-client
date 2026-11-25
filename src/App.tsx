import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products, type ProductCategory } from "./data/products";
import "./App.css";

function App() {
  const [category, setCategory] = useState<ProductCategory>("iPhone");
  const visibleProducts = products.filter((product) => product.category === category);

  return (
    <>
      <Header />
      <main>
        <Banner product={products[0]} />
        <div className="container catalog" id="featured-products">
          <CategoryList items={products} category={category} onChange={setCategory} />
          <ProductList title={category} items={visibleProducts} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
