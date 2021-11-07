import React from "react";
import { Button } from "react-bootstrap";
import bg from "../../../media/hero-bg.mp4";
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-bg">
          <video className="background">
            <source src={bg} type="video/mp4"></source>
          </video>
          <div className="overlay"></div>
        </div>
        <div className="hero-title">
          <h2 className="sub-caption">WORK HARDER, GET STRONGER</h2>
          <h1 className="main-caption mb-sm-3">
            No <span className="marked">Pain</span> No{" "}
            <span className="marked">Gain</span>
          </h1>
          <p className="details hero-details-text text-white mb-sm-5">
            Having a perfect body requires a lot of training. Nice-looking body
            and
            <br />
            powerfulorganism are interconnected and we can help you with both.
          </p>
          <Button className="cta login">Become A Member</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
