import Filters from "./Filters";
import TaskList from "./TaskList";
const Main = ({ handleEdit, tasks, setTasks, showDoneTasks, setShowDoneTasks  }) => {
  return (
    <main className="bg-bg-primary main">
      <div className="container d-flex flex-wrap py-3d75 ">
        <Filters showDoneTasks={showDoneTasks} setShowDoneTasks={setShowDoneTasks} tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} handleEdit={handleEdit}/>
      </div>
    </main>
  );
};

export default Main;
