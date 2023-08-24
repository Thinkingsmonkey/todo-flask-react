import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const url = "http://localhost:8000/blogs";
  const {data: blogs, panding, error} = useFetch(url, null)
  return (
    <div className="home">
      {error && <h2>{error}</h2>}
      {panding ? <p>Panding...</p> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
