import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import bkg from '../../images/bkg.jpg';
import bkg1 from '../../images/bkg1.jpg';
import bkg2 from '../../images/bkg2.jpg';

class ControlledCarousel extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { index, direction } = this.props;
    return (
      <Carousel 
        indicators={false} 
        fade={true} 
        controls={false}
        activeIndex={index}
        direction={direction}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 min-vh-100"
            src={bkg}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 min-vh-100"
            src={bkg1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 min-vh-100"
            src={bkg2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  
}

export default ControlledCarousel;