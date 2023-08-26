import { useEffect, useState } from "react";
const Edit = ({ taskInfo, setShowEdit }) => {
  console.log(taskInfo.method);
  const [editedTaskInfo, setEditedTaskInfo] = useState({ ...taskInfo }); // 使用狀態來管理編輯後的任務資訊
  const handleChange = (propertyName, newValue) => {
    setEditedTaskInfo((preEditedTaskInfo) => ({
      ...preEditedTaskInfo,
      [propertyName]: newValue,
    }));
  };
  const handleAddTask = async () => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        member_id: 1,
        title: "success"
      })
    });
    // const response = await fetch("/api/tasks");

    const data = await response.json();
    console.log(data);
    setShowEdit(false)
  };
  const handleEditTask = () => {
    setShowEdit(false)
  };

  // ! 測試用記得刪除
  useEffect(() => {
    console.log(editedTaskInfo);
  }, [editedTaskInfo]);

  return (
    <div onClick={() => setShowEdit(false)} className="edit-container">
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
            <h2 className="fw-bold text-start mb-d25">DESCRIPT</h2>
            <textarea
              className="border border-2 border-filed rounded-pill w-100 p-1 pt-d5"
              cols="30"
              rows="10"
              placeholder="Your Task"
              value={editedTaskInfo.descript}
              onChange={(e) => handleChange("descript", e.target.value)}
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
