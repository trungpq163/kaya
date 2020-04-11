import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './carousel.styles.scss';

import imageOne from '../../assets/cat1.jpg';
import imageTwo from '../../assets/cat2.jpg';

const CarouselPage =  () => (
  <Carousel showThumbs={false} infiniteLoop={true}>
    <div style={{ height: '25vh', color: '#fff', backgroundSize: 'cover'}}>
      <img src={imageOne} alt="slide_one"/>
    </div>
    <div style={{ height: '25vh', color: '#fff', backgroundSize: 'cover'}}>
      <img
        src={imageTwo} alt="slide_two" />
    </div>
  </Carousel>
);

export default CarouselPage;