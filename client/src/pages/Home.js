// Home.js
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import useLoginState from "../hook/useLoginState";

function Home() {
  const url = "/api/test";
  const [login, isPanding] = useLoginState(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (login === false) {
      navigate("/login");
    }
  }, [login, navigate]);

  return (
    <div>
      {isPanding ? (
        <h2>Panding...</h2>
      ) : (
        login &&
        <Navbar />
      )}
    </div>
  );
}

export default Home;
