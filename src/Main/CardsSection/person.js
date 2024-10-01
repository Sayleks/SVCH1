import React, { Component } from "react";
import './person.css';

class SectionCard extends Component {
    render() {
        const {title,text,imgName}= this.props;
        const imgUrl = require(`../../../public/img/${imgName}`)
        return (
            <div className="section-thrid-card">
                <img src={imgUrl} alt={title} />
                <h4 className>{title}</h4>
                <p className>{text}</p>
            </div>
        );
    }
}

export default SectionCard;