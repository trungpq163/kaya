import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Carousel from '../../components/carousel/carousel.component';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { createStructuredSelector } from 'reselect';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomePageContainer } from './homepage.styles';

const HomePage = ({ currentUser }) => {
  useEffect(() => {
    toast('Welcome to my website!');
  }, []);
  return (
    <HomePageContainer>
      {
        currentUser !== null ? <ToastContainer /> : null
      }
      <Carousel />
      <CollectionsOverview />     
    </HomePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  null
)(HomePage);