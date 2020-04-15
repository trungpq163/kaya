import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item2.styles.scss';
import { toast, ToastContainer } from 'react-toastify';

const CollectionItem2 = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const addItemFunc = (x) => addItem(x);

  const toastItem = () => toast('You added item success! :3');

  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <div className="product-grid">
        <div className="product-image">
          <a href="#">
            <img
              className="pic-1"
              src={imageUrl}
              alt="img"
            />
            <img
              className="pic-2"
              src={imageUrl}
              alt="img"
            />
          </a>
          <span className="product-new-label">Sale</span>
          <span className="product-discount-label">20%</span>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a href="#">{name}</a>
          </h3>
          <div className="price">
            ${price}
            <span>${price + price*1/5}</span>
          </div>
          <Link className="add-to-cart"
            to='#'
            onClick={
              () => {
                addItemFunc(item);
                toastItem();
              }
            }       
          >
            + Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem2);

