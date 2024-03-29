import React, { useEffect, useState } from 'react';
import Service from "../../Shared/Service/Service"
import './ServicesBody.css'

const ServicesBody = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mb-5">
      <div className="all-service">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default ServicesBody;