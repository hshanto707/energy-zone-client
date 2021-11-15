import React, { useEffect, useState } from 'react';
import Trainer from '../../Home/Trainer/Trainer';
import './TrainersBody.css'

const TrainersBody = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("./trainers.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data));
  }, []);

  return (
    <div className="container mb-5">
      <div className="all-trainer">
        {trainers.map((trainer) => (
          <Trainer trainer={trainer} key={trainer.id}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default TrainersBody;