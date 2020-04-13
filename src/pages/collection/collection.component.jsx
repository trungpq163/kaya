import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionItem2 from '../../components/collection-item/collection-item2.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { LinkCustom } from './collection.styles';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
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
          >{title}</h2>
        </LinkCustom>
      </div>
      <div className="items">
        
        {
          <div className="row">
            {
              items
                .map(item => (
                  <CollectionItem2 key={item.id} item={item} />
                ))
            }
          </div>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);