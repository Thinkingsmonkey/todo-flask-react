// useLoginState.js
import { useState, useEffect } from "react";

const useLoginState = (url) => {
  const [login, setLogin] = useState(null);
  const [panding, setPanding] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("false fetch data");
        setPanding(false);
        return res.json();
      })
      .then((data) => {
        setLogin(data.message === "login"); 
      })
      .catch((error) => {
        setLogin(false);
        setPanding(false);
      });
  }, [url]);

  return [login, panding];
};

export default useLoginState;
