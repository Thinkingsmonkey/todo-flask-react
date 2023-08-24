import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLoginState from "../hook/useLoginState";
import logoImage from "../images/logo.png";

function Login() {
  const url = "/api/test";
  const login = useLoginState(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (login === true) {
      navigate("/");
    }
  }, [login, navigate]);
  return (
    <div className="container w-3/12 mx-auto">
      <div className="flex flex-col justify-center items-center w-100">
        <img src={logoImage} alt="" className="block w-14" />
        <h2>login</h2>
        <p>Sign in to your account</p>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <Link>
          <button className="bg-[#93BBF5]">Login</button>
        </Link>
        <Link>
          <p className="">Forgot Password? Click here to reset</p>
        </Link>
        <Link>
          <button className="">Register New Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
