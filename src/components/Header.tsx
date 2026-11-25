export default function Header() {
  return (
    <header className="header" id="trang-chu">
      <div className="container header-inner">
        <a href="#trang-chu" className="logo">
          <span className="logo-mark" aria-hidden="true">m</span>
          <span>iMeoShop</span>
        </a>
        <nav className="nav" aria-label="Điều hướng chính">
          <a href="#trang-chu">Trang chủ</a>
          <a href="#featured-products">Sản phẩm</a>
          <a href="#gioi-thieu">Giới thiệu</a>
        </nav>
        <a href="#gio-hang" className="cart-link">
          Giỏ hàng <span>0</span>
        </a>
      </div>
    </header>
  );
}
