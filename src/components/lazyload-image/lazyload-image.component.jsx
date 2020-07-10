import React from 'react';
import LazyLoad from 'react-lazyload';

import MainWrapper from './lazyload-image.styles';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImg = ({ url }) => {
  return (
    <LazyLoad throttle={1000} height={295.141} width={253}>
      <LazyLoadImage
        src={url}
        effect="blur"
      />
    </LazyLoad>
  )
}

export default LazyLoadImg;