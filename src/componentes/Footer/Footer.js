import React, { Component } from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Footer">
        <Logo style={{width: '8em'}} />
        <h2><b>Instituto Mexicano del Cemento y del Concreto A.C.</b><br/>Av. Insurgentes Sur # 1846 Col. Florida, C.P. 01030, México, CDMX. (55) 5322 5740 imcyc@imcyc.com</h2>
      </div>
    );
  }
}
 
export default Footer;