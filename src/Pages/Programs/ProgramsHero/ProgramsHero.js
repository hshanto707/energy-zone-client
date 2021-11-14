import React from 'react';

const ProgramsHero = () => {
  return (
    <div className="hero">
      <div className="hero-bg">
        <img src="https://i.imgur.com/hlKkGxD.jpg" className="w-100" alt="" />
        <div className="overlay"></div>
      </div>
      <div className="hero-title">
        <h1 className="main-caption mb-3">
          Our <span className="marked">Programs</span>
        </h1>
      </div>
    </div>
  );
};

export default ProgramsHero;