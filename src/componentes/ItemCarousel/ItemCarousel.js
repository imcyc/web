import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './ItemCarousel.css';

class ItemCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activoItemIndex: 0,
      setActiveItemIndex: 0
    }
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
            rightChevron={<i class="lni-angle-double-right"></i>}
            leftChevron={<i class="lni-angle-double-left"></i>}
          >
            {Array.from(new Array(10)).map((_, i) =>
              <div
                key={i}
                className="ItemCarousel"
              >
                <h2 onClick={() => this.props.toggleCarousel('prev')}>HOLA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus at felis quis aliquet. Donec at ullamcorper ipsum.</p>
              </div>
            )}
          </ItemsCarousel>
        </div>
    );
  }
}
 
export default ItemCarousel;