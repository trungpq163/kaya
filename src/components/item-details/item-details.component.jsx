import React from 'react';

import CommentsFB from '../../components/comments/comments.component';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { toast } from 'react-toastify';

import LazyLoadImgDetails from '../lazyload-image-details/lazyload-image-details.component';

import { format } from 'number-currency-format';

import './item-details.styles.scss';

const ItemDetail = ({ item, addItem }) => {
  const { name, price, detail, imageUrl } = item;
  const addItemFunc = (x) => addItem(x);
  const toastItem = () => toast('Sản phẩm đã được thêm vào giỏ hàng :3');
  return (
    <div className="container">
      <div className="row mb-6">
        <div className="col-md-6 col-lg-7">
          <LazyLoadImgDetails
            className="img-background"
            url={imageUrl}
            alt="img"
          />
        </div>
        <div className="col-md-6 col-lg-5">
          <div>
            <h4 className='text item-title'>
              {name}
            </h4>
            <span className='span-price'>
              {format(price * 1000, { decimalsDigits: 0, decimalSeparator: '', thousandSeparator: '.' })}₫
            </span>
            <h4 className='text1'>
              {detail}
            </h4>
            <button className='addItemButton' onClick={
              () => {
                addItemFunc(item);
                toastItem();
              }}>
              Thêm vào giỏ hàng
            </button>
            <div className="social-icon">
              <a href="#" className="icon" data-tooltip="Facebook">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" className="icon" data-tooltip="Twitter">
                <i className="fa fa-twitter" />
              </a>
              <a href="#" className="icon" data-tooltip="Google Plus">
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <CommentsFB />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ItemDetail);