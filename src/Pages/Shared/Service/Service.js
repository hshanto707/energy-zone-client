import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Service = (props) => {
  const {id, name, img, description, rating, price} = props.service;

  return (
    <div className="product d-flex flex-column">
      <img src={img} alt="" />
      <div className="mx-3">
        <h3 className="product-name fw-bolder fs-1 mt-3">{name}</h3>
        <p className="details mt-3">{description.slice(0, 150)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price} ({rating} <FontAwesomeIcon className="rating-star mb-1" icon={faStar} />)</h5>
      </div>
      <NavLink className="mt-auto" to={`/services/${name}/${description}/${img}`}>
        <Button className="buy-now mb-4">View Details</Button>
      </NavLink>
    </div>
  );
};

export default Service;