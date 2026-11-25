export default function Banner() {
  return (
    <section className="container" aria-labelledby="banner-title">
      <div className="banner">
        <h1 id="banner-title">Ưu đãi tại ShopMini</h1>
        <p>Khám phá các sản phẩm nổi bật cho học tập, làm việc và sinh hoạt.</p>
        <a className="btn banner-link" href="#featured-products">
          Mua ngay
        </a>
      </div>
    </section>
  );
}
