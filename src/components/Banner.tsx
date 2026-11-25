import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function Banner({ product }: Props) {
  return (
    <section className="container" aria-labelledby="banner-title">
      <div className="banner">
        <div className="banner-copy">
          <h1 id="banner-title">Chọn thiết bị Apple hợp với bạn.</h1>
          <p>Khám phá iPhone, iPad, Mac và Apple Watch tại iMeoShop.</p>
          <a className="btn banner-link" href="#featured-products">
            Mua ngay <span aria-hidden="true">↗</span>
          </a>
        </div>
        <figure className="banner-product">
          <img src={product.image} alt={product.name} fetchPriority="high" />
          <figcaption>{product.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}
