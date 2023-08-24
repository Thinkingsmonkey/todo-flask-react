// useLoginState.js
import { useState, useEffect } from "react";

const useLoginState = (url) => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("false fetch data");
        return res.json();
      })
      .then((data) => {
        setLogin(data.message === "login"); // 根据后端返回的数据判断是否登录
      })
      .catch((error) => {
        setLogin(false);
      });
  }, [url]);

  return login;
};

export default useLoginState;
