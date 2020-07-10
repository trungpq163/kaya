import React from 'react';
import CollectionItem from '../collection-item/collection-item2.component';

import PropTypes from 'prop-types';

import accents from 'remove-accents';

import './search-preview.styles.scss';

const SearchPreview = ({ items, routeName, searchField }) => (
  <div className="collection-preview">
    <div className="preview">
      <div className="container">
        <div className="row">
          {
            items
              .filter((item, idx) => accents.remove(item.name.toLowerCase()).includes(accents.remove(searchField.toLowerCase())))
              .map(item => (
                <CollectionItem key={item.id} item={item} route={`/shop/${routeName}`} />
              ))
          }
        </div>
      </div>
    </div>
  </div>
);

SearchPreview.propTypes = {
  items: PropTypes.array,
  routeName: PropTypes.string
};

export default SearchPreview;