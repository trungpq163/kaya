import React from 'react';

import Directory from '../../components/directory/directory.component';

import Carousel from '../../components/carousel/carousel.component';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Carousel />
    <CollectionsOverview/>
    {/* <Directory /> */}
  </HomePageContainer>
);

export default HomePage;