import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Trainer from "../../Shared/Trainer/Trainer"
import "./TrainerSection.css";

const TrainerSection = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("./trainers.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data));
  }, []);

  return (
    <div className="container trainers-container">
      <h1 className="fw-bold mb-5">Our Trainers</h1>
      <div className="all-trainer mb-5">
        {trainers.slice(0, 3).map((trainer) => (
          <Trainer trainer={trainer} key={trainer.id}></Trainer>
        ))}
      </div>
      <NavLink to="/trainers">
        <Button className="see-more mt-5">
          See More
          <FontAwesomeIcon className="ms-2" icon={faChevronRight} />
        </Button>
      </NavLink>
    </div>
  );
};

export default TrainerSection;
