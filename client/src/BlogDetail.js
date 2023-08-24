import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/blogs/" + id;
  const { data: blog, error, isPending, fetchData } = useFetch(url, null);
  const navigate = useNavigate();
  const handleDelete = async () => {
    await fetchData(url, {
      method: "DELETE",
    });
    navigate("/");
  };
  return (
    <div className="blog-details">
      {isPending ? <div>Loading...</div> : blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Deltet</button>
        </article>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default BlogDetails;
