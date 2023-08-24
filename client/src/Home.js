import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const url = "http://localhost:8000/blogs";
  const options = null;
  const {data: blogs, panding, error} = useFetch(url, options)  
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {panding ? <p>Panding...</p> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
