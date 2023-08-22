import { useState, useEffect } from "react";
const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          if (!res.ok) {
            throw new Error("could not fetch the data for the resource");
          }
          const jsonData = await res.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchData();
    }, 1000);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
