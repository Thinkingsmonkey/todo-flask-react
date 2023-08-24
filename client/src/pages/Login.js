import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLoginState from "../hook/useLoginState";
import logoImage from "../images/logo.png";

function Login() {
  const url = "/api/test";
  const [login, isPanding] = useLoginState(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (login === true) {
      navigate("/");
    }
  }, [login, navigate]);
  return (
    <>
      {isPanding ? (
        <h2>Panding...</h2>
      ) : (
        !login && (
          <div className="bg-[#F8F6FA]">
            <div className="container  w-[28rem] h-screen mx-auto  flex items-center relative">
              <div className="w-[28rem] h-[32rem] absolute top-[calc(50%-246px)] left-[10px] bg-blue-300 shadow-[0px_6px_12px_0_rgba(0,0,0,.12)]"></div>
              <div className="w-[28rem] h-[32rem] absolute bg-white shadow-[6px_0px_12px_0_rgba(0,0,0,.12)]  flex flex-col justify-center items-center ">
                <img src={logoImage} alt="" className="block w-14" />
                <h2>login</h2>
                <p>Sign in to your account</p>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <Link>
                  <button className="bg-[#93BBF5]">Login</button>
                </Link>
                <Link>
                  <p className="text-base">Forgot Password? Click here to reset</p>
                </Link>
                <Link>
                  <button className="">Register New Account</button>
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default Login;
