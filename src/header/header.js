// LeftLink.js
import { Component } from "react";
import LeftLink from "./left_link/leftLink";
import HeaderContainerRightLink from "./right_link/rightLink.js"
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>

      <div className="header-container">
        <LeftLink></LeftLink>
        <CentralNameCompany nameCompany = "mixlab"/>
        <HeaderContainerRightLink></HeaderContainerRightLink>
      </div>
      </header>
    );
  }
}

class CentralNameCompany extends Component{
  render(){
    return (
      <div className="central-nameCompany"><h1>{this.props.nameCompany}</h1>
    </div>      
    )
  }
}

export default Header;