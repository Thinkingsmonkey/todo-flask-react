import Filters from "./Filters";
import TaskList from "./TaskList";
const Main = ({ handleEdit }) => {
  return (
    <main className="bg-bg-primary main">
      <div className="container d-flex flex-wrap py-3d75 ">
        <Filters />
        <TaskList handleEdit={handleEdit}/>
      </div>
    </main>
  );
};

export default Main;
