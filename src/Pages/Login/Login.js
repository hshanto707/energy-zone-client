import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import './Login.css'
import useAuth from "../../hooks/useAuth";

const Login = () => {
  
  const { signInUsingGoogle,handleRegistration, handleEmailChange, handlePasswordChange,handleResetPassword} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_url)
      })
  }

  return (
    <div className="form-container">
      <h1 className="mb-5" style={{color:'#ff0050'}}>Login</h1>

      <form onSubmit={handleRegistration} className="w-25 mx-auto">
        <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
        <input onBlur={handlePasswordChange} type="password" className="form-control mt-3" id="inputPassword3" placeholder="Password" required />
        <button type="submit" className="login w-100 text-white mt-3">Login<FontAwesomeIcon className="ms-2" icon={faUser} /></button>
        <Button className="login w-100 mt-3" type="button" onChange={handleResetPassword}>Reset Password</Button>
        
        <p className="mt-5 mb-4">OR</p>
        <h5>Login With</h5>
        <FontAwesomeIcon className="social-link fs-2 mx-3 mt-2" icon={faGoogle} onClick={handleGoogleLogin} />
        <div className="d-flex justify-content-center mt-4">
          <p className="me-2">New To Energy Zone?</p>
          <Link className="link-regular" to="/registration">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;