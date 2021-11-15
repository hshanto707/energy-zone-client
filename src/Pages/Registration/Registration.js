import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import React from "react";
import "./Registration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const {
    signInUsingGoogle,
    handleRegistration,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    error,
  } = useAuth();

  return (
    <div className="form-container">
      <h1 className="mb-5" style={{ color: "#ff0050" }}>Registration</h1>

      <Form onSubmit={handleRegistration} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        <div className="row mb-3 text-danger">{error}</div>
        <Button className="login w-100 btn-primary" type="submit">
          Register
          <FontAwesomeIcon className="ms-2" icon={faUser} />
        </Button>

        <p className="mt-5 mb-4">OR</p>
        <h5>Register With</h5>
        <FontAwesomeIcon className="social-link fs-2 mx-3 mt-2" icon={faGoogle} onClick={signInUsingGoogle} />
        <div className="d-flex justify-content-center mt-4">
          <p className="me-2">Already Have Account?</p>
          <Link className="link-regular" to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
};

export default Registration;
