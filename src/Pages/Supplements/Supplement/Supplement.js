import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Supplement.css'

const Supplement = (props) => {
  const {name, img, price} = props.supplement;

  return (
    <div className="product d-flex flex-column">
      <img src={img} alt="" />
      <div className="mx-3">
        <h3 className="fw-bolder mt-3">{name}</h3>
        <h5 className="label fw-bold mb-3">Price: ${price}</h5>
      </div>
      
        <Button className="buy-now mx-auto mb-4 mt-auto" onClick={() => props.handleAddToCart(props.supplement)}>Buy Now<FontAwesomeIcon icon={faShoppingCart} className="ms-2" /></Button>
      
    </div>
  );
};

export default Supplement;