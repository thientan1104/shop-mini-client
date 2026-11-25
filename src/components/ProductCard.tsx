import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" width="680" height="528" />
      </div>
      <div className="product-body">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          {isOutOfStock && <span className="stock-label">Hết hàng</span>}
        </div>
        <h3>{product.name}</h3>
        <p className="product-details">{product.details}</p>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button type="button" className="btn product-btn" disabled={isOutOfStock}>
          Thêm vào giỏ
        </button>
      </div>
    </article>
  );
}
