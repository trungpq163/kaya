import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import PropTypes from 'prop-types';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }, clearItem, cartItem, addItem, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItem)}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}
      >&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}
    >&#10005;</div>
  </div>
);

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  clearItem: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);