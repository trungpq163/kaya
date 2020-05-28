import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import ItemPage from '../item/item.component';

import ItemDetail from '../../components/item-details/item-details.component';

import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopPage = ({ match }) => (
  <div className="shop-page container mt-5 pt-5">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    <Route exact path={`${match.path}/:collectionId/:itemId`} component={ItemPage} />
    <ToastContainer />
  </div>
);

ShopPage.propTypes = {
  match: PropTypes.object
}

export default ShopPage;