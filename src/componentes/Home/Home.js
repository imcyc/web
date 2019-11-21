import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="Home">
        <h2 onClick={() => this.props.toggleCarousel('prev')}>Instituto Mexicano del Cemento y del Concreto A.C.</h2>
        <h3>COMPARTIR EL CONOCIMIENTO</h3>
      </div>
    );
  }
}
 
export default Home;