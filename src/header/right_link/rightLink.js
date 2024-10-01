import { Component } from "react";
import './rightLink.css'

class HeaderContainerRightLink extends Component{
    render(){
        return(
            <div className="header-container-link header-container-link-right">
                <a  className="background-color-anchors  lng-about" href="#veterinarian login">Veterinarian login</a>
                <a className="background-color-anchors lng-login" href="try Mixlab">Try Mixlab</a>
                
            </div>
        )
    }
}

export default HeaderContainerRightLink