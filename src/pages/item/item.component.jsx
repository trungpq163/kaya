import React from 'react';
import { connect } from 'react-redux';

import CollectionItem2 from '../../components/collection-item/collection-item2.component';
import ItemDetail from '../../components/item-details/item-details.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { LinkCustom } from './item.styles';

import slugify from 'slugify';

import PropTypes from 'prop-types';

import './item.styles';

const ItemPage = ({ collection, history }) => {
  const { title, items, routeName } = collection;
  const { location } = history;

  return (
    <div className="item-page">
      <div className="titleGenre"
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <LinkCustom to='/shop/'>
          <h2 className="title"
            style={{
              fontSize: '1.3em',
              marginBottom: '15px'
            }}
          >Home >&nbsp;</h2>
        </LinkCustom>

        <LinkCustom to='/shop/'>
          <h2 className="title"
            style={{
              fontSize: '1.3em',
              marginBottom: '15px'
            }}
          >Shop >&nbsp;</h2>
        </LinkCustom>
        <LinkCustom to='/shop/'>
          <h2 className="title"
            style={{
              fontSize: '1.3em',
              marginBottom: '15px'
            }}
          >{title} >&nbsp;</h2>
        </LinkCustom>
        <LinkCustom to='/shop/'>
          <h2 className="title"
            style={{
              fontSize: '1.3em',
              marginBottom: '15px'
            }}
          >
            {
              items
                .filter(item => window.location.pathname === `/shop/${routeName}/${slugify(item.name)}`)
                .map(item => (
                  item.name
                ))
            }
          </h2>
        </LinkCustom>
      </div>
      <div className="items">
        {
          <div className="row">
            {
              items
                .filter(item => window.location.pathname === `/shop/${routeName}/${slugify(item.name)}`)
                .map(item => (
                  <ItemDetail key={item.id} item={item} route={location.pathname} />
                ))
            }
          </div>
        }
      </div>
    </div>
  );
};

ItemPage.propTypes = {
  collection: PropTypes.object,
  history: PropTypes.object
}

/* {
  window.location.pathname === `/shop/${routeName}/${slugify(item.name)}`
} */

// .filter(item => slugify(item.name) === 'Mu-Snapback-Non-Hiphop-Thoi-Trang-Han-Quoc-Nuzada-N8')

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(ItemPage);