import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          {isOutOfStock && <span className="stock-label">Hết hàng</span>}
        </div>
        <h3>{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button type="button" className="btn" disabled={isOutOfStock}>
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
