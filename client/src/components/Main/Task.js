import editImage from "../../images/edit.png";
import deleteImage from "../../images/delete.png";

const Task = ({ task, handleEdit, tasks, setTasks }) => {

  const getEditDateFormat = (taskDateFormat) => {
    return taskDateFormat.slice(0, 10)
  }
  const handleOpenEdit = () => {
    handleEdit({
      ...task, 
      method: "edit",
      start: getEditDateFormat(task.start),
      deadline: getEditDateFormat(task.deadline),
    })
  }
  const handleDeleteEdit = async () => {

    try {
      const response = await fetch("/api/tasks/" + task.id, {
        method: "DELETE"
      })
      const status = response.status;

      if (!response.ok) throw new Error("delete dose not complate")
      setTasks(preTasks => preTasks.filter(item => item.id !== task.id))
    } catch (error) {
      console.log(error.message);
    }
  }
  
  const getDateFormat = (date) => {
    const dateObj = new Date(date);
    const formattedDeadline = `${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;
    return formattedDeadline;
  }


  return (
    <div className="task border border-primary p-1 d-flex flex-column ">
      <div className="task__header d-flex justify-content-between mb-1d25">
        <p className="task__priority btn cursor-default btn-primary rounded-pill px-2">{task.priority}</p>
        <p className="task__state btn cursor-default btn-secondary rounded-pill">{task.state}</p>
      </div>
      <div className="task__title fw-bold mb-1">{task.title}</div>
      <div className="task__description flex-grow-1">
        <h2 className="fw-400">Description:</h2>
        <div className="description__content lh-base">{task.description}</div>
      </div>
      <div className="task__footer d-flex gap-1">
        <p className=" btn cursor-default btn-secondary rounded-pill">{getDateFormat(task.start)}</p>
        <p className=" btn cursor-default btn-secondary rounded-pill">{getDateFormat(task.deadline)}</p>
        <img onClick={handleOpenEdit} className="task__editImage cursor-pointer" src={editImage} alt="edit" />
        <img onClick={handleDeleteEdit} src={deleteImage}  className="task__deleteImage cursor-pointer" alt="delete" />
      </div>
    </div>
  );
};

export default Task;
