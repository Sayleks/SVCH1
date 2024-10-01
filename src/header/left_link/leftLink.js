
import { Component } from "react";
import './leftLink.css'

class LeftLink extends Component {
  render() {
    return (
      <div className="container-left-link">
       <LeftAncors href="#veterinarians" name="Veterinarians"></LeftAncors>
       <LeftAncors href="#how it works" name="How it works"></LeftAncors>
       <LeftAncors href="#about us" name="About us"></LeftAncors>
       <LeftAncors href="#blog" name="Blog"></LeftAncors>
       <LeftAncors href="#shop" name="Shop"></LeftAncors>
      </div>
    );
  }
}

class LeftAncors extends Component{
    render(){
        return(
            <a className="background-color-anchors leftLink-style" href={this.props.href}>{this.props.name}</a>
        )
    }
}

export default LeftLink;