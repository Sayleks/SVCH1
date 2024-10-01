import React, { Component } from "react";
import SectionCard from "./CardsSection/person";
import './main.css'

class MainPage extends Component{
    render(){
        const Card = [
            {
                imgName: 'card-bird.png',
                title: "We receive your prescription",
                text: "Either your veterinarian sends us a prescription or we reach out to them for you. Whatever is easiest!"
            },
            {
                imgName: 'card-rabit.png',
                title: "We deliver your care package",
                text: "Fast and free next-day delivery, straight to your door. Same-day in NYC and LA."
            },
            {
                imgName: 'card-dog.png',
                title: "You treat your pet",
                text: "Give your pet the care they need to feel better. Plus they can play with our included toy!"
            }
        ];
        return(
            <main>
            <section className="section-container" id="section-thrid">
                <div id="How-it-works" className="section-thrid-container">
                    <h2 className="lng-how-it-works">How it works</h2>
                    <div id="section-thrid-card-container" className="flex-box-between">
                        {Card.map((item, index) => (
                            <SectionCard
                                key={index}
                                imgName={item.imgName}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                    <div className="sec-button">
                    <a href="how-it-works/how-it-works.html">
                        <button id="section-thrid-button">
                            <span className="lng-learn-more">Learn More</span>
                        </button>
                    </a>
                    </div>
                </div>
            </section>
            </main>
        )
    }
}

export default MainPage