// Home.js
import { useEffect } from "react";
import Header from "../components/header/Header";
import Main from "../components/Main/Main";
import { useNavigate } from "react-router-dom";
// import useLoginState from "../hook/useLoginState";

function Home() {
  const navigate = useNavigate();

  //! 開發用記得刪除、重開
  // const url = "/api/test";
  // const [login, isPanding] = useLoginState(url);
  let login = true;
  let isPanding = false;

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
        login && (
          [
            <Header />,
            <Main />
          ]
        )
      )}
    </div>
  );
}

export default Home;
