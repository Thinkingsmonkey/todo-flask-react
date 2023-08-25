import Filters from "./Filters";
import Pagination from "./Pagination";
import TaskList from "./TaskList";
import Edit from "./Edit";
const Main = () => {
  return (
    <main className="bg-bg-primary ">
      <div className="container d-flex flex-wrap py-3d75 ">
        <Filters />
        <Pagination />
        <TaskList />
        <Edit />
      </div>
    </main>
  );
};

export default Main;
