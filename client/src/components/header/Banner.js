import { useState } from "react";
import moreImage from "../../images/more.png";
const Banner = ({ handleEdit }) => {
  const [title, setTitle] = useState('');
  const handleOpenEdit = () => {
    handleEdit({ title, method: "add" });
  };
  const handleAddTask = async () => {
    // const response = await fetch("/api/test", {
    //   method: "DELETE"
    // });
    const response = await fetch("/api/test");
    const data = await response.json()
    console.log(data);
  };
  return (
    <div className="pb-3 d-block text-center mt-2">
      <h1 className="fs-1 mb-1d5">Todo</h1>
      <div className="add-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="add-group__input"
          type="text"
          placeholder="Add yout task"
        />
        <button className=" border-0" onClick={handleOpenEdit}>
          <img className="add-group__more" src={moreImage} alt="more config" />
        </button>
        <button onClick={handleAddTask} className="add-group__addBtn">
          <p className="text-text">Add Task</p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
