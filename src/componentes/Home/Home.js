import React, { Component } from 'react';
import './Home.css';
import ItemCarousel from '../ItemCarousel/ItemCarousel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return ( 
      <div className="Home">
        <div className="Contenidos">
          <h2 onClick={() => this.props.toggleCarousel('prev')}>Instituto Mexicano del Cemento y del Concreto A.C.</h2>
          <h3>COMPARTIR EL CONOCIMIENTO</h3>
          <p>El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión<br/>de las técnicas de aplicación del cemento y del concreto.</p>
        </div>
        <ItemCarousel toggleCarousel={this.props.toggleCarousel} />
      </div>
    );
  }
}
 
export default Home;