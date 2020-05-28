import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { toast } from 'react-toastify';
import './item-details.styles.scss';

const ItemDetail = ({ item, addItem }) => {
  const { name, price, detail, imageUrl } = item;
  const addItemFunc = (x) => addItem(x);
  const toastItem = () => toast('Your item added successful :3');
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-7">
          <img className="img-background" src={imageUrl} alt="IMG-PRODUCT" />
        </div>
        <div className="col-md-6 col-lg-5">
          <div>
            <h4 className='text item-title'>
              {name}
            </h4>
            <span className='span-price'>
              ${price}
            </span>
            <h4 className='text1'>
              {detail}
            </h4>
            <button className='addItemButton' onClick={
              () => {
                addItemFunc(item);
                toastItem();
              }}>
              Add to cart
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