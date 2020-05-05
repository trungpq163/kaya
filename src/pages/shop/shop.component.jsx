import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import ItemPage from '../item/item.component';

import ItemDetail from '../../components/item-details/item-details.component';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopPage = ({ match }) => (
  <div className="shop-page container mt-5 pt-5">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    <Route exact path={`${match.path}/:collectionId/:itemId`} component={ItemDetail} />
    <ToastContainer />
  </div>
);

export default ShopPage;