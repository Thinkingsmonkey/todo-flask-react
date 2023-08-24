// useLoginState.js
import { useState, useEffect } from "react";

const useLoginState = (url) => {
  const [login, setLogin] = useState(null);
  const [panding, setPanding] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("false fetch data");
          setPanding(false)
          return res.json();
        })
        .then((data) => {
          setLogin(data.message === "login"); // 根据后端返回的数据判断是否登录
        })
        .catch((error) => {
          setLogin(false);
          setPanding(false)
        });
    }, 2000)
  }, [url]);

  return [login, panding];
};

export default useLoginState;
