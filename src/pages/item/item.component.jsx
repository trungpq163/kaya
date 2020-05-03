import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import ItemChild from '../../components/item-child/item-child.component';

const slugify = require('slugify');

const ItemDetails = ({ collection, history }) => {
  const { location } = history;
  const { pathname } = location;
  return (
    <div>
      {
        collection.map(element => {
          const { items } = element;
          items.map(element2 => {
            let str = slugify(element2.name).toLowerCase();
            if (str === pathname.split('/shop/hats/')) {
              return <h1>Check page rendering</h1>;
              
            }
          });
        })
      }
    </div>
    /* items.find(item => {
        return slugify(item.name) === pathname.split('/shop/hats/');
    }) */
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview
});

export default connect(
  mapStateToProps,
  null
)(ItemDetails);