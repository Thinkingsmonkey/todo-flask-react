import editImage from "../../images/edit.png";
import deleteImage from "../../images/delete.png";

const Task = ({ task, handleEdit }) => {
  const handleOpenEdit = () => {
    handleEdit({
      ...task, method: "edit"
    })
  }
  const handleDeleteEdit = () => {
    
  }
  return (
    <div className="task border border-primary p-1">
      <div className="task__header d-flex justify-content-between mb-1d25">
        <p className="task__priority btn cursor-default btn-primary rounded-pill px-2">priority</p>
        <p className="task__state btn cursor-default btn-secondary rounded-pill">state</p>
      </div>
      <div className="task__title fw-bold mb-1">title</div>
      <div className="task__description mb-2">
        <h2 className="fw-400">Description:</h2>
        <div className="description__content lh-base">descriptionContent Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias necessitatibus rem officiis deleniti obcaecati.</div>
      </div>
      <div className="task__footer d-flex gap-1">
        <p className=" btn cursor-default btn-secondary rounded-pill">start</p>
        <p className=" btn cursor-default btn-secondary rounded-pill">deadLine</p>
        <img onClick={handleOpenEdit} className="task__editImage cursor-pointer" src={editImage} alt="edit" />
        <img onClick={handleDeleteEdit} src={deleteImage}  className="task__deleteImage cursor-pointer" alt="delete" />
      </div>
    </div>
  );
};

export default Task;
