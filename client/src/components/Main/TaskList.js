import { useEffect, useState } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
const TaskList = ({ handleEdit }) => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/task")
      const data = await response.json()
      console.log(data);
    }
  },[])
  return (
    <ul className="task-list pt-3d75 d-flex flex-wrap justify-content-md-between justify-content-center gap-2d25">
      {tasks.map((task) => (
        <li key={uuidv4()}>
          <Task handleEdit={handleEdit} task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
