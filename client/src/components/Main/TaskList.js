import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
const TaskList = () => {
  const tasks = ["task1", "task2", "task3", "task3", "task3", "task3", "task3", "task3", "task3"];
  return (
    <ul className="task-list pt-3d75 d-flex flex-wrap justify-content-md-between justify-content-center gap-2d25">
      {tasks.map((task) => (
        <li key={uuidv4()}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
