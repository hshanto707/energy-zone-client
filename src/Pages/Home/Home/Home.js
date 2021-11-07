import React from 'react';
import FeaturedProgram from '../FeaturedProgram/FeaturedProgram';
import ServicesSection from '../ServicesSection/ServicesSection';
import Hero from '../Hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProgram></FeaturedProgram>
      <ServicesSection></ServicesSection>
    </div>
  );
};

export default Home;