import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey = 'pk_test_4trcLKODVN4jy519hUXtZszM00r5cqKRQy';

  const onToken = token => {
    console.log(token);
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('Payment error: ', err);
        alert(
          'There was an issue with your payment! Please make sure to use the provided credit data cart'
        );
      });
  };

  return (
    <StripeCheckout 
      label='Pay now'
      name='Berrrys'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeCheckoutButton;