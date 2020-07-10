import React, { Component } from 'react';
import Carousel from '@bit/react-bootstrap.react-bootstrap.carousel';

import './carousel.styles.scss';

class Example extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://i.imgur.com/QPw2LBU.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://i.imgur.com/DGzDClK.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://i.imgur.com/8YI2oUe.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

const CarouselComponent = () => {
  return (
    <div className='container pt-5 mt-5 pb-5 mb-5'>
      <Example />
    </div>
  );
};

export default CarouselComponent;