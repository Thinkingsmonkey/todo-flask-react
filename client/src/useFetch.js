import { useState, useEffect } from "react";
const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [panding, setPanding] = useState(true);
  const [error, setError] = useState(false);
  const [resOK, setResOK] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        setResOK(res.ok);
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
      .catch((error) => {
        // 接收包含連線失敗的所有錯誤
        setPanding(false);
        setError(error.message);
      });
  }, [url, options]);

  const fetchData = async (newUrl, newOptions) => {
    try {
      setPanding(true);
      setError(null);
      const response = await fetch(newUrl, newOptions)
      setResOK(response.ok);
      if (!response.ok) throw new Error("could not fetch data from resource")
      const newData = await response.json();
      setData(newData)
      setPanding(false);
      return { data: newData, panding: false, error: null, resOK };
    } catch (error) {
      setError(error.message)
      setPanding(false);
      return { data: [], panding: false, error: error.message, resOK: false };
    }
  };

  return { data, panding, error, resOK, fetchData };
};

export default useFetch;
