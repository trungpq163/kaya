import React from 'react';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="container footer py-5">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">©2020 Kaya (Team Do An Co So)</small>
        </div>
        <div className="col-6 col-md">
          <h5>Chăm sóc KH</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Trung Tâm Trợ Giúp</a></li>
            <li><a className="text-muted" href="#">Hướng Dẫn Mua Hàng</a></li>
            <li><a className="text-muted" href="#">Thanh Toán</a></li>
            <li><a className="text-muted" href="#">Vận Chuyển</a></li>
            <li><a className="text-muted" href="#">Trả Hàng & Hoàn Tiền</a></li>
            <li><a className="text-muted" href="#">Chăm Sóc Khách Hàng</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Về Kaya</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Giới thiệu</a></li>
            <li><a className="text-muted" href="#">Chính sách bảo mật</a></li>
            <li><a className="text-muted" href="#">Chính hãng</a></li>
            <li><a className="text-muted" href="#">Flash Sales</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Thanh toán</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Business</a></li>
            <li><a className="text-muted" href="#">Education</a></li>
            <li><a className="text-muted" href="#">Government</a></li>
            <li><a className="text-muted" href="#">Gaming</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Team</a></li>
            <li><a className="text-muted" href="#">Locations</a></li>
            <li><a className="text-muted" href="#">Privacy</a></li>
            <li><a className="text-muted" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;