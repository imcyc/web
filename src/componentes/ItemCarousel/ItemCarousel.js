import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './ItemCarousel.css';

class ItemCarousel extends Component {
  state = {
    activoItemIndex: 0,
    setActiveItemIndex: 0
  }
  render() {
    const flecha = '>';
    return (
      <div style={{"padding":"0 0 15px 15px","maxWidth":"100%","margin":"0"}}>
          <ItemsCarousel
            infiniteLoop={true}
            gutter={12}
            activePosition={'center'}
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={4}
            slidesToScroll={1}
            outsideChevron={false}
            showSlither={false}
            firstAndLastGutter={true}
            activeItemIndex={this.state.activoItemIndex}
            requestToChangeActive={value => this.setState({ activoItemIndex: value })}
            rightChevron={flecha}
            leftChevron={'<'}
          >
            {Array.from(new Array(10)).map((_, i) =>
              <div
                key={i}
                className="ItemCarousel"
              >
                <h2>HOLA</h2>
              </div>
            )}
          </ItemsCarousel>
        </div>
    );
  }
}
 
export default ItemCarousel;