import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideMenu.css';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
    <SideNav
    onSelect={(selected) => {
        console.log(selected);
    }}
    className={this.props.estilo}
    >
    <SideNav.Toggle />
        <SideNav.Nav defaultSelected="laboratorio">
            <NavItem eventKey="laboratorio" className="sidenav">
                <NavIcon>
                    <i className="lni-helmet"></i>
                </NavIcon>
                <NavText>
                    LABORATORIO
                </NavText>
            </NavItem>
            <NavItem eventKey="asesorias" className="sidenav">
                <NavIcon>
                    <i className="lni-pencil-alt"></i>
                </NavIcon>
                <NavText>
                    ASESORÍAS
                </NavText>
            </NavItem>
            <NavItem eventKey="membresias" className="sidenav">
                <NavIcon>
                    <i className="lni-crown"></i>
                </NavIcon>
                <NavText>
                    MEMBRESIAS
                </NavText>
            </NavItem>
            <NavItem eventKey="eventos" className="sidenav">
                <NavIcon>
                    <i className="lni-hammer"></i>
                </NavIcon>
                <NavText>
                    EVENTOS
                </NavText>
            </NavItem>
            
        </SideNav.Nav>
    </SideNav>
    );
  }
}
 
export default SideMenu;