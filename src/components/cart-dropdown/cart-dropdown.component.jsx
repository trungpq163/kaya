import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

import PropTypes from 'prop-types';

const CartDropdown = ({ cartItems, history, dispatch }) => {

  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
              <span className="empty-message">Giỏ hàng của bạn đang trống!</span>
            )
        }
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >Thanh toán ngay!</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  history: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));