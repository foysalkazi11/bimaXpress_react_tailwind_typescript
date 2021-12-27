import React from "react";
import AuthScreenWrapper from "./authscreen.wrapper";
import { useNavigate } from "react-router-dom";
import "./auth.scss";

// INFO: THIS COMPONENT CONTAINS SIGNUP PAGE LAYOUT
function SignPage() {
  const navigate = useNavigate();

  // HANDLE SIGNUP ON FORM SUBMISSION
  const handleSignup = () => {
    navigate("/");
  };

  // HANDLE CLICK ON LOGIN LINK
  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <AuthScreenWrapper title="SIGNUP" submit={handleSignup}>
      <div className="authscreen__login">
        <div className="input__group">
          <input type="text" placeholder="Email or Phone" id="username" />
        </div>
        <div className="input__group">
          <input type="text" placeholder="Email or Phone" id="username" />
        </div>
        <div className="input__group">
          <input type="password" placeholder="Password" id="password"></input>
        </div>
        <button>Log In</button>
      </div>
      <div className="authscreen__or">
        ALREADY HAVE AN ACCOUNT? <span onClick={handleRedirect}>LOGIN</span>
      </div>
    </AuthScreenWrapper>
  );
}

export default SignPage;
