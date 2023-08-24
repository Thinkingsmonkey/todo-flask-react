import { useState, useEffect } from "react";
const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [panding, setPanding] = useState(true);
  const [error, setError] = useState(false);
  const resOK = null
  // 將 useEffect 包起來給一個變數作為參數傳出使用
  // 不使用 useEffect，直接一個建 function 做參數傳出
  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        resOK = res.ok;
        if (!res.ok) {
          throw Error("could not fetch data from resource"); // 處理連線成功但後續出錯
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPanding(false);
        setError(null); // 若是再次 fetch 成功，清掉 error 訊息
      })
      .catch((error) => { // 接收包含連線失敗的所有錯誤
        setPanding(false);
        setError(error.message);
      });
  }, [url, options]) 
  return ( 
    {data, panding, error, resOK}
  )
}
 
export default useFetch;
