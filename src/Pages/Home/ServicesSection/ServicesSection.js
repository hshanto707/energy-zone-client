import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Service from '../../Services/Service/Service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container trainers-container">
      <h1 className="fw-bold mb-5">Our Services</h1>
      <div className="container all-programs">
        {services.slice(0, 6).map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
      <NavLink to="/services">
        <Button className="see-more">
          See More
          <FontAwesomeIcon className="ms-2" icon={faChevronRight} />
        </Button>
      </NavLink>
    </div>
  );
};

export default ServicesSection;