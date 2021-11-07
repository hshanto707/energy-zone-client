import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Program.css'

const Program = (props) => {
  const {name, instructor, img, instructorImg, rating, description, price} = props.program;

  return (
    <div className="product d-flex flex-column">
      <img src={img} alt="" />
      <div className="mx-3">
        <h3 className="product-name fw-bolder fs-1 mt-3">{name}</h3>
        <div className="instructor d-flex justify-content-center">
          <img className="instructor-img me-2" src={instructorImg} alt="" />
          <h3 className="instructor-name fw-medium mt-3">{instructor}</h3>
        </div>
        <p className="details mt-3">{description.slice(0, 150)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price} ({rating} <FontAwesomeIcon className="rating-star mb-1" icon={faStar} />)</h5>
      </div>
      <NavLink className="mt-auto" to={`/programs/${name}/${description}`}>
        <Button className="buy-now mb-4">View Details</Button>
      </NavLink>
    </div>
  );
};

export default Program;