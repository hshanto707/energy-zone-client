import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner text-white">
      <h1 className="main-caption">Make <span className="marked">Fitness</span></h1>
      <h1 className="main-caption">Your First <span className="marked">Priority</span></h1>
    </div>
  );
};

export default Banner;