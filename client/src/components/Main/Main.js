import { useState } from "react";
import Filters from "./Filters";
import TaskList from "./TaskList";
const Main = ({
  handleEdit,
  tasks,
  setTasks,
  showDoneTasks,
  setShowDoneTasks,
}) => {
  
  const [filter, setFilter] = useState(null);
  let filterTasks = null;
  
  if (filter === "Done") {
    filterTasks = tasks.filter((task) => task.state === "Done");
  } else if (filter === "Priority") {
    filterTasks = tasks.slice().sort((a, b) => {
      // 將 "High" 排在前面，其次是 "Medium"，最後是 "Low"
      const priorityOrder = {
        High: 0,
        Medium: 1,
        Low: 2,
      };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  } else if (filter === "Today") {
    const today = new Date()
    const todayFormat = today.toISOString().split("T")[0]
    filterTasks = tasks.filter((task) => {
      const taskStartFormat = task.start.split("T")[0]
      return taskStartFormat === todayFormat
    })
  } else {
    filterTasks = tasks
  }
    


  return (
    <main className="bg-bg-primary main">
      <div className="container d-flex flex-wrap py-3d75 ">
        <Filters
          showDoneTasks={showDoneTasks}
          setShowDoneTasks={setShowDoneTasks}
          tasks={tasks}
          setTasks={setTasks}
          setFilter={setFilter}
        />
        <TaskList
          filterTasks={filterTasks}
          tasks={tasks}
          setTasks={setTasks}
          handleEdit={handleEdit}
        />
      </div>
    </main>
  );
};

export default Main;
