import { useState } from "react";
import { useAuth } from '../AuthContext';
import moreImage from "../../images/more.png";

const Banner = ({ handleEdit, tasks, setTasks, setShowEdit }) => {
  const {memberId} = useAuth()
  const [title, setTitle] = useState(""); // 因為 react 需要設為空字串，所以判斷是否為空還需要另外寫
  const handleOpenEdit = () => {
    handleEdit({ title, method: "add" });
  };
  const handleAddTask = async () => {
    try {
      if (title === null || title === "")  throw new Error("Title should not be empty")
      const requestData = {
        member_id: memberId,
        title: title,
        priority: null, // Explicitly set to null for fields not passed from frontend
        state: null,
        start: null,
        deadline: null,
        description: null,
      };
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      const data = await response.json();
      const newTasks = [...tasks, data];
      setTasks(newTasks);
      setShowEdit(false);
      setTitle("")
    } catch (error) {
      alert(error.message)
    }
  };
  return (
    <div className="pb-3 d-block text-center mt-2">
      <h1 className="fs-1 mb-1d5">Todo</h1>
      <div className="add-group">
        <input
          value={title || ""}
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
