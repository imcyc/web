import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './ItemCarousel.css';
import logo from '../../images/bkg.jpg';

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
                onClick={() => this.props.toggleCarousel('prev')}
              >
                <div>
                  <img src={logo} alt="Logo" style={{width: '100px'}} />
                </div>
                <div>
                  <h2>HOLA</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
            )}
          </ItemsCarousel>
        </div>
    );
  }
}
 
export default ItemCarousel;