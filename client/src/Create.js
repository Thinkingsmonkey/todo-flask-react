import { useState } from "react";
import useFetch from "./useFetch";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [panding, setPand] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/blogs";
    const blog = { title, body, author };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }
    const {resOK} = useFetch(url, options)
    console.log(resOK);
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {panding ? <button>Add Panding...</button> : <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
