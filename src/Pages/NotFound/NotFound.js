import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container d-flex justify-content-center align-items-center">
      <div>
        <h1 className="error-code">404</h1>
        <h3>OOPS! We can't seem to find the page you're looking for</h3>
        <Link to="/">
          <Button className="login mt-4" style={{width: "300px"}}>Back To Home Page</Button>
        </Link>
      </div>
      <div>
        <img src="https://i.imgur.com/Cl63zbh.png" alt="404" />
      </div>
    </div>
  );
};

export default NotFound;