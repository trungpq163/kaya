import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import PropTypes from 'prop-types';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page mt-5 pt-5">
    <div className="checkout-header">
      <div className="header-block">
        <span>Sản phẩm</span>
      </div>
      <div className="header-block">
        <span>Chi tiết</span>
      </div>
      <div className="header-block">
        <span>Số lượng</span>
      </div>
      <div className="header-block">
        <span>Giá</span>
      </div>
      <div className="header-block">
        <span>Xoá</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className="test-warning mt-5">
      *Thẻ tín dụng dùng để test!
      <br />
       4242 4242 4242 4242 - Exp: 05/20 - CVV: 123
    </div>
    <div className="total">Tổng: ${total}</div>
    <StripeCheckoutButton price={total} />
  </div>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);