import React from 'react';

import './item-details.styles.scss';

const ItemDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-7">
          <img src="https://i.picsum.photos/id/688/500/300.jpg" alt="IMG-PRODUCT" />
        </div>
        <div className="col-md-6 col-lg-5">
          <div>
            <h4 className='text item-title'>
              Lightweight Jacket
            </h4>
            <span>
              $58.79
            </span>
            <h4 className='text'>
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
            </h4>
            
            <button>Add to cart</button>


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

export default ItemDetail;