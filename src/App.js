import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import Carousel from './componentes/Carousel/Carousel';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      index: 0,
      direction: null,
      carouselItemCount: 3
    }
    this.toggleCarousel = this.toggleCarousel.bind(this);
  }
  
  toggleCarousel = (direction) => {
    console.log(direction);
    let index = this.state.index;
    const [min, max] = [0, this.state.carouselItemCount - 1]
    if(direction === 'prev'){
      index++
    }
    if(index > max){
      index = 0
    }
    if(index < min){
      index = max
    }
    this.setState({
      index,
      direction
    })
  };

  render(){
    return (
      <HashRouter basename="/">
        <Carousel 
          index={this.state.index}
          direction={this.state.direction}
          toggleCarousel={this.toggleCarousel}
        />
        <div className="Site">
          <Header />
          <main className="Site-content">
            <Route exact path="/" component={Home} />
            <Route 
              exact 
              path="/" 
              component={(props) => <Home 
                {...props} 
                toggleCarousel={this.toggleCarousel}
              />}
            />
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
