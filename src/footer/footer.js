import { Component } from "react";
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id="Information" className="footer">
                <div className="section-container">
                    <div className="footer-containre flex-box-between">
                        <InformationSection />
                        <QuickLinksSection />
                        <ContactSection />
                        <SocialSection />
                    </div>
                </div>
            </footer>
        );
    }
}

class InformationSection extends Component {
    render() {
        return (
            <div className="footer-containre-div">
                <p>Information</p>
                <ul>
                    <li><a href="tel:+23423424">our telephone</a></li>
                </ul>

            </div>
        );
    }
}

class QuickLinksSection extends Component {
    render() {
        return (
            <div className="footer-containre-div">
                <p>Quick Links</p>
                <ul>
                    <li><a className="lng-veterinarians" href="">Veterinarians</a></li>
                    <li><a href="">Products</a></li>
                    <li><a className="lng-How" href="how-it-works/how-it-works.html">How it Works</a></li>
                    <li><a className="lng-About" href="aboutus/aboutus.html">About us</a></li>
                    <li><a className="lng-Blog" href="blog/blog.html">Blog</a></li>
                    <li><a className="lng-Shop" href="">Shop</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a className="lng-veterinarian-login" href="registration/registration.html">Veterinarian login</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
        );
    }
}

class ContactSection extends Component {
    render() {
        return (
            <div className="footer-containre-div">
                <p>Call or Text</p>
                <span><a href="tel:(888) 901-4480"><span>(888) 901-4480</span></a></span>
                <p>Email</p>
                <span><a href="mailto:hello@mixlabrx.com"><span>hello@mixlabrx.com</span></a></span>
                <p>Fax</p>
                <span><a href="tel:(212) 967-0892"><span>(212) 967-0892</span></a></span>
            </div>
        );
    }
}




class SocialSection extends Component {
    render() {
        return (
            <div className="footer-containre-div">
                <p>Social</p>
                <div className="footer-logo-container">
                    {['footer-insta.png', 'footer-facebok.png', 'footer-x.png', 'footer-xz.png', 'footer-google.png'].map((logo, index) => (
                        <div className="container-logo" key={index}>
                            <img src={`img/${logo}`} alt={logo.split('.')[0]} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default Footer;