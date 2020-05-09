import React from 'react';

import PropTypes from 'prop-types';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name"> {
        name.length < 25 ? name : name.split(' ', 3).join(' ') + '....'
      }</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CartItem;