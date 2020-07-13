import React from 'react';
import LazyLoad from 'react-lazyload';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImgDetails = ({ url }) => {
  return (
    <LazyLoad throttle={1000} height={560} width={320}>
      <LazyLoadImage
        src={url}
        effect="blur"
      />
    </LazyLoad>
  )
}

export default LazyLoadImgDetails;