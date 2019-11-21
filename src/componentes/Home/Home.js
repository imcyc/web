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
          <h3>COMPARTIR EL CONOCIMIENTO EN CONCRETO</h3>
        </div>
        <ItemCarousel />
      </div>
    );
  }
}
 
export default Home;