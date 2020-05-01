import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

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

export default StripeCheckoutButton;