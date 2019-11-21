import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="Home">
        <h2 
          style={{position: 'fixed',top: '50%',zIndex: '1000000',background:'#333'}} 
          onClick={() => this.props.toggleCarousel('prev')}>
            MOVER
        </h2>
      </div>
    );
  }
}
 
export default Home;