import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLoginState from "../client/src/hook/useLoginState";
import logoImage from "../images/logo.png";

function Reset() {
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
            <div className="login-container justify-content-center align-items-center ">
              <div className="card__shadow register__shadow position-absolute bg-primary"></div>
              <div className="card position-relative bg-white flex flex-col justify-content-center  align-items-center">
                <img src={logoImage} alt="logo" className="mb-d75" />
                <h2 className="card__title text-primary fw-bold ">Reset Password</h2>
                <p className="card__text mb-1d5 text-light">Resetting password via email</p>
                <div className="card__field-group mb-1d5">
                  <input
                    className="card__input-field d-block w-100 py-1"
                    type="text"
                    placeholder="Emain"
                  />
                  <div className="icon">
                    <span className="material-symbols-outlined">email</span>
                  </div>
                </div>
                <div className="card__field-group mb-1d5">
                  <input
                    className="card__input-field d-block w-100 py-1"
                    type="text"
                    placeholder="New Password"
                  />
                  <div className="icon">
                    <span className="material-symbols-outlined">key</span>
                  </div>
                </div>
                <div className="card__field-group mb-1d5">
                  <input
                    className="card__input-field d-block w-100 py-1 "
                    type="text"
                    placeholder="New Password Again"
                  />
                  <div className="icon">
                    <span className="material-symbols-outlined">key</span>
                  </div>
                </div>
                <Link to="/login" className="w-100 text-center bg-primary py-1 mb-1">
                  <p className="card__text text-white fw-bold">Reset</p>
                </Link>
                <Link to="/login" className="d-block w-100 text-center py-1  border border-2 border-text">
                  <p className="card__text text-text fw-bold">
                    Back to login
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

export default Reset;
