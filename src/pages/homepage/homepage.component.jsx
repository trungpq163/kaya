import React from 'react';

import Directory from '../../components/directory/directory.component';

import Carousel from '../../components/carousel/carousel.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Carousel/>
    <Directory />
  </HomePageContainer>
);

export default HomePage;