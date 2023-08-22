import useFetch from "./useFetch";

const Home = () => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MjY5NTYzMywianRpIjoiMmVlODMyMzMtZTg4Yi00ZDYyLThkYTEtYzI3Y2I3MDNmODYyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjkyNjk1NjMzLCJleHAiOjE2OTI2OTkyMzMsInVzZXJuYW1lIjoiQW50aG9ueSIsImNvbnRlbnRfaWQiOjJ9.xbYUIgGi0J62dLugVx0Evg4r7PBo9_YdpVwGavWjIfU";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
  const url = "http://127.0.0.1:5000/api/courses"
  
  const { data, loading, error} = useFetch(url, options)
  return (
    <div>
      { error && <p>{error}</p>}
      { loading && <p>Loading...</p>}
      {data[0] &&
        data.map((item, index) => (
          <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
        ))}
    </div>
  );
};

export default Home;
