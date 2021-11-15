import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div>
          <h3 className="footer-title text-white mb-4">About Us</h3>
          <div className="text-lg-start">
            <p className="footer-text">Energy Zone is an American franchisor and 
            <br />operator of fitness centers based in New York City.
            <br />
            <br />It has 44 clubs, making it one of the largest
            <br />fitness club franchises by number of members 
            <br />and locations.</p>
          </div>
          <div>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text me-2 mt-2" icon={faFacebookSquare} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text me-2 mt-2" icon={faTwitterSquare} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text me-2 mt-2" icon={faLinkedin} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text me-2 mt-2" icon={faInstagramSquare} /></Link>
            <Link className="footer-link"><FontAwesomeIcon className="footer-text me-2 mt-2" icon={faYoutube} /></Link>
          </div>
        </div>
        <div className="footer-section our-location">
          <h3 className="footer-title text-white mb-4">Our Location</h3>
          <div className="our-location-info">
            <div className="text-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-2" icon={faHome} />
              <p className="footer-text">1730 M St. Suite 501, NYC, <br />New York, 20036 USA</p>
            </div>
            <div className="text-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-2" icon={faPhone} />
              <p className="footer-text">12-02-0987 6543<br />12-02-3454 2458</p>
            </div>
            <div className="text-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-1" icon={faEnvelope} />
              <p className="footer-text">hshanto707@gmail.com</p>
            </div>
            <div className="text-start d-flex">
              <FontAwesomeIcon className="text-white me-2 mt-1" icon={faGlobe} />
              <p className="footer-text">www.website.com</p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title text-white mb-4">Programs</h3>
          <div>
            <Link className="footer-link"><p className="footer-text">Strength Training I</p></Link>
            <Link className="footer-link"><p className="footer-text">Strength Training II</p></Link>
            <Link className="footer-link"><p className="footer-text">HIIT Training I</p></Link>
            <Link className="footer-link"><p className="footer-text">HIIT Training II</p></Link>
            <Link className="footer-link"><p className="footer-text">Power Lifting</p></Link>
            <Link className="footer-link"><p className="footer-text">Calisthenics</p></Link>
            <Link className="footer-link"><p className="footer-text">Conditioning</p></Link>
            <Link className="footer-link"><p className="footer-text">Tabata</p></Link>
          </div>
        </div>
        <div className="footer-section opening-hour">
          <h3 className="footer-title text-white mb-4">Opening Hour</h3>
          <div className="d-flex justify-content-between">
            <div className="text-start me-5">
              <p className="footer-text">Monday</p>
              <p className="footer-text">Tuesday</p>
              <p className="footer-text">Wednesday</p>
              <p className="footer-text">Thursday</p>
              <p className="footer-text">Friday</p>
              <p className="footer-text">Saturday</p>
              <p className="footer-text">Sunday</p>
            </div>
            <div className="text-start">
              <p className="footer-text">06:00AM - 11:00PM</p>
              <p className="footer-text">06:00AM - 11:00PM</p>
              <p className="footer-text">06:00AM - 11:00PM</p>
              <p className="footer-text">06:00AM - 11:00PM</p>
              <p className="footer-text">06:00AM - 11:00PM</p>
              <p className="footer-text">07:00AM - 12:00PM</p>
              <p className="footer-text">07:00AM - 12:00PM</p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-text pt-4">Copyright &copy; 2021. <span className="text-white">Energy Zone.</span> All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
