import React from 'react';
import './Trainers.css'
import TrainersBody from './TrainersBody/TrainersBody';
import TrainersHeroSection from './TrainersHeroSection/TrainersHeroSection';

const Trainers = () => {
  return (
    <div>
      <TrainersHeroSection></TrainersHeroSection>
      <TrainersBody></TrainersBody>
    </div>
  );
};

export default Trainers;