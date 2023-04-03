import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="footer-area">
            <div className=" footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>About us </h4>
                                <div className="footer-title-line"></div>

                                <img src="assets/img/footer-logo.png" alt="" className="wow pulse" data-wow-delay="1s" />
                                <p>Find your dream home and make an offer to its owner or publish your own property for sale with just a few clicks!</p>
                                <ul className="footer-adress">
                                    <li><i className="pe-7s-map-marker strong"> </i> Bulgaria, Sofia, Tsar Asen 18</li>
                                    <li><i className="pe-7s-mail strong">
                                    </i>
                                        info@gmail.com
                                    </li>
                                    <li><i className="pe-7s-call strong">
                                    </i>
                                        0877456789
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>Quick links </h4>
                                <div className="footer-title-line"></div>
                                <ul className="footer-menu">
                                    <li><Link to="/catalog">Properties</Link></li>
                                    <li><Link to="/catalog/create">Submit property</Link></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                            <br /><br />
                            <div className="social pull-right">
                                <ul>
                                    <li><a className="wow fadeInUp animated" href="https://twitter.com"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://www.facebook.com" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://plus.google.com" data-wow-delay="0.3s"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://instagram.com" data-wow-delay="0.4s"><i className="fa fa-instagram"></i></a></li>
                                    <li><a className="wow fadeInUp animated" href="https://instagram.com" data-wow-delay="0.6s"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;