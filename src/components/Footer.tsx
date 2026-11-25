const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" id="gioi-thieu">
      <div className="container">
        <div className="footer-details">
          <div>
            <strong className="footer-brand">iMeoShop</strong>
            <p>Thiết kế bởi Võ Phạm Thiên Tân</p>
            <p>Bài tập môn Công nghệ lập trình hiện đại</p>
          </div>
          <div id="gio-hang">
            <strong>Giỏ hàng demo</strong>
            <p>Giá và tình trạng tồn kho dùng cho bài thực hành.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} iMeoShop</p>
          <a href="https://www.apple.com/vn/">Ảnh sản phẩm từ Apple</a>
        </div>
      </div>
    </footer>
  );
}
