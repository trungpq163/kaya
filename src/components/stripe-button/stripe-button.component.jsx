import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import PropTypes from 'prop-types';

import Logo from '../../assets/logo.png';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey = 'pk_test_4trcLKODVN4jy519hUXtZszM00r5cqKRQy';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Thanh toán ngay'
      name='Kaya (Đồ án cơ sở)'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Tổng số tiền là $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number
};

export default StripeCheckoutButton;