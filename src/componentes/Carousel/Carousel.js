import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

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
            src="https://imcyc.github.io/autoconstruccion/images/bkg.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 min-vh-100"
            src="https://imcyc.github.io/autoconstruccion/images/bkg1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>wefwefwe slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 min-vh-100"
            src="https://imcyc.github.io/autoconstruccion/images/bkg2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>ergergirst slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  
}

export default ControlledCarousel;