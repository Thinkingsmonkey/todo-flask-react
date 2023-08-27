import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";

const Edit = ({ tasks, setTasks, taskInfo, setShowEdit }) => {
  const { memberId } = useAuth();

  const [editedTaskInfo, setEditedTaskInfo] = useState({ ...taskInfo }); // 使用狀態來管理編輯後的任務資訊

  const handleChange = (propertyName, newValue) => {
    setEditedTaskInfo((preEditedTaskInfo) => ({
      ...preEditedTaskInfo,
      [propertyName]: newValue,
    }));
  };

  const handleAddTask = async () => {
    try {
      if (editedTaskInfo.title === null || editedTaskInfo.title === "") {
        throw new Error("Title should not be empty");
      }
      const newTaskInfo = {};
      for (const key in editedTaskInfo) {
        if (editedTaskInfo.hasOwnProperty(key)) {
          newTaskInfo[key] =
            editedTaskInfo[key] === "" ? null : editedTaskInfo[key];
        }
      }

      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...newTaskInfo, member_id: memberId }),
      });

      const data = await response.json();
      const newTasks = [...tasks, data];
      setTasks(newTasks);
      setShowEdit(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEditTask = async () => {
    try {
      const response = await fetch("/api/tasks/" + editedTaskInfo.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedTaskInfo),
      });
      const data = await response.json();
      
      const newTasks = tasks.map((task) => {
        if (task.id === data.id) return { ...task, ...data };
        return task;
      });
      setTasks(newTasks);
      if (!response.ok) throw new Error("delete dose not complate");
    } catch (error) {
      console.log(error.message);
    }

    setShowEdit(false);
  };
  const handleCloseEdit = (e) => {
    if (!e.target.closest(".edit")) setShowEdit(false);
  };

  return (
    <div onClick={(e) => handleCloseEdit(e)} className="edit-container">
      <div className="container edit bg-white py-3d5 px-4d5 d-flex flex-column gap-1d25 text-filed">
        <div className="edit__head d-flex justify-content-between">
          <div className="edit__title w-100 ">
            <h2 className="fw-bold mb-d25">TITLE</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Your Task Title"
              type="text"
              value={editedTaskInfo.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>
        </div>
        <div className="edit__body d-flex justify-content-between flex-wrap gap-1 ">
          <div className="edit__priority w-45">
            <h2 className="fw-bold mb-d25">PRIORITY</h2>
            <select
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              value={editedTaskInfo.priority}
              onChange={(e) => handleChange("priority", e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="edit__state w-45">
            <h2 className="fw-bold mb-d25">STATE</h2>
            <select
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              value={editedTaskInfo.state}
              onChange={(e) => handleChange("state", e.target.value)}
            >
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="edit__start w-45">
            <h2 className="fw-bold mb-d25">START</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Select"
              type="date"
              value={editedTaskInfo.start}
              onChange={(e) => handleChange("start", e.target.value)}
            />
          </div>
          <div className="edit__deadline w-45">
            <h2 className="fw-bold mb-d25">DEADLINE</h2>
            <input
              className=" border border-2 border-filed rounded-pill p-d5 w-100"
              placeholder="Select"
              type="date"
              value={editedTaskInfo.deadline}
              onChange={(e) => handleChange("deadline", e.target.value)}
            />
          </div>
        </div>
        <div className="edit__footer text-center ">
          <div className="edit__descript mb-1d25">
            <h2 className="fw-bold text-start mb-d25">DESCRIPTION</h2>
            <textarea
              className="border border-2 border-filed rounded-pill w-100 p-1 pt-d5"
              cols="30"
              rows="10"
              placeholder="Your Task"
              value={editedTaskInfo.description}
              onChange={(e) => handleChange("description", e.target.value)}
            ></textarea>
          </div>
          {taskInfo.method === "add" ? (
            <p className="btn btn-primary mx-auto" onClick={handleAddTask}>
              Add Task
            </p>
          ) : (
            <p className="btn btn-primary mx-auto" onClick={handleEditTask}>
              Edit Task
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Edit;
