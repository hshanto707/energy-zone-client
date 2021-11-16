import React from 'react';
import FeaturedProgram from '../FeaturedProgram/FeaturedProgram';
import ServicesSection from '../ServicesSection/ServicesSection';
import Hero from '../Hero/Hero';
import Banner from "../Banner/Banner";
import TrainerSection from '../TrainerSection/TrainerSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProgram></FeaturedProgram>
      <ServicesSection></ServicesSection>
      <Banner></Banner>
      <TrainerSection></TrainerSection>
    </div>
  );
};

export default Home;