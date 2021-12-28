import React from "react";
import AuthScreenWrapper from "./authscreen.wrapper";
import { useNavigate } from "react-router-dom";
import "./auth.scss";

// INFO: THIS COMPONENT CONTAINS LOGINPAGE LAYOUT
function LoginPage() {
  const navigate = useNavigate();

  // HANDLE LOGIN ON FORM SUBMISSION
  const handleLogin = () => {
    navigate("/");
  };

  // HANDLE CLICK ON SIGNUP LINK
  const handleRedirect = () => {
    navigate("/signup");
  };

  return (
    <AuthScreenWrapper title="LOGIN" submit={handleLogin}>
      <div className="authscreen__login">
        <div className="input__group">
          <input type="text" placeholder="Email or Phone" id="username" />
        </div>
        <div className="input__group">
          <input type="password" placeholder="Password" id="password"></input>
        </div>
        <button>Log In</button>
      </div>
      <div className="authscreen__or">
        NO ACCOUNT? <span onClick={handleRedirect}>SIGNUP</span>
      </div>
    </AuthScreenWrapper>
  );
}

export default LoginPage;
