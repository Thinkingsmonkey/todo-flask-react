import { Link } from "react-router-dom";
import React from "react";
import logoImage from "../../images/logo_small.png";
import userImage from "../../images/user.png";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { logout, memberIdClearn } = useAuth();
  const handleLogout = () => {
    logout();
    memberIdClearn();
  };
  return (
    <nav className=" navbar position-fixed bg-secondary ">
      <div className="container">
          <a href="/">
            <img src={logoImage} alt="logo" />
          </a>
        <div className="menu position-relative ">
          <img src={userImage} alt="logo" />
          <Link to="/login ">
            <p
              onClick={handleLogout}
              className="navbar__logout bg-primary text-text"
            >
              Logout
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
