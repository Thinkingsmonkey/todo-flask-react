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
          <div className="bg-bg-primary">
            <div className="login-container  justify-content-center align-items-center ">
              <div className="card__shadow position-absolute bg-primary"></div>
              <div className="card position-relative bg-white flex flex-col justify-content-center  align-items-center">
                <img src={logoImage} alt="logo" className="mb-d75" />
                <h2 className="card__title text-primary fw-bold ">Login</h2>
                <p className="card__text mb-1d5 text-light">Sign in to your account</p>
                <div className="card__field-group mb-1d5">
                  <input
                    className="card__input-field d-block w-100 py-1"
                    type="text"
                    placeholder="Username"
                  />
                  <div className="icon">
                    <span class="material-symbols-outlined">person</span>
                  </div>
                </div>
                <div className="card__field-group mb-1d5">
                  <input
                    className="card__input-field d-block w-100 py-1 "
                    type="text"
                    placeholder="Password"
                  />
                  <div className="icon">
                    <span class="material-symbols-outlined">key</span>
                  </div>
                </div>
                <Link to="/" className="w-100 text-center bg-primary py-1 mb-1">
                  <p className="card__text text-white fw-bold">Login</p>
                </Link>
                <Link to="/reset" className="mb-1">
                  <p className="text-text">
                    Forgot Password? Click here to reset
                  </p>
                </Link>
                <Link to="/register" className="d-block w-100 text-center py-1  border border-2 border-text">
                  <p className="card__text text-text fw-bold">
                  Sign Up New Account
                  </p>
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
