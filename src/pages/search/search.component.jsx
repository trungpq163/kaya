import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './search.styles.scss';

import SearchBox from '../../components/search-box/search-box.component';
import SearchPreview from '../../components/search-preview/search-preview.component';

import PropTypes from 'prop-types';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchPage = ({ collections }) => {
  const [searchField, setSearchField] = useState('search');

  const onSearchChange = event => {
    if (event.target.value === '') {
      setSearchField('search');
    } else {
      setSearchField(event.target.value);
    }
  }

  return (
    <div className="shop-page container mt-5 pt-5">
      <div className="collections-overview">
        <SearchBox onChange={onSearchChange} />
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <SearchPreview key={id} searchField={searchField} {...otherCollectionProps} />
          ))
        }
      </div>
      <ToastContainer />
    </div>
  )
};

SearchPage.propTypes = {
  collections: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(SearchPage);