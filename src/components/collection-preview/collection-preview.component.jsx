import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item2.component';

import PropTypes from 'prop-types';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link className="title"
      to={`/shop/${routeName}`}
      style={{
        textAlign: 'start',
        paddingLeft: '15px',
        fontWeight: '500',
        fontSize: '1.5em'
      }}
    >{title}</Link>
    {
      window.location.pathname === '/shop' ?
        (<div className="preview">
          <div className="container">
            <div className="row">
              {
                items
                  .filter((item, idx) => idx < 8)
                  .map(item => (
                    <CollectionItem key={item.id} item={item} route={`/shop/${routeName}`} />
                  ))
              }
            </div>
          </div>
        </div>) :
        (<div className="preview">
          <div className="container">
            <div className="row">
              {
                items
                  .filter((item, idx) => idx < 4)
                  .map(item => (
                    <CollectionItem key={item.id} item={item} route={`/shop/${routeName}`} />
                  ))
              }
            </div>
          </div>
        </div>
        )
    }
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  routeName: PropTypes.string
};

export default CollectionPreview;