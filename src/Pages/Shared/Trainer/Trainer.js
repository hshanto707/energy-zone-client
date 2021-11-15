import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Trainer.css";

const Trainer = (props) => {
  const {
    name,
    qualification,
    img,
    specialty1,
    specialty2,
    specialty3,
    specialty4,
  } = props.trainer;
  return (
    <div className="trainer d-flex flex-column">
      <img className="trainer-img" src={img} alt="" />
      <div className="mx-3">
        <h3 className="trainer-name fw-bolder mt-2">{name}</h3>
        <h5 className="label">{qualification}</h5>

        <div className="text-start mt-3">
          <p className="details fw-bolder">Specialties :</p>
          <p className="details ms-3">1. {specialty1}</p>
          <p className="details ms-3">2. {specialty2}</p>
          <p className="details ms-3">3. {specialty3}</p>
          <p className="details ms-3">4. {specialty4}</p>
        </div>
      </div>
      <div class="socials mb-4 mt-auto">
        <FontAwesomeIcon className="social-link fs-2 mx-3 mt-2" icon={faFacebookSquare} />
        <FontAwesomeIcon className="social-link fs-2 mx-3 mt-2" icon={faTwitterSquare} />
        <FontAwesomeIcon className="social-link fs-2 mx-3 mt-2" icon={faInstagramSquare} />
      </div>
    </div>
  );
};

export default Trainer;
