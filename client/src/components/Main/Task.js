import editImage from "../../images/edit.png";
import deleteImage from "../../images/delete.png";

const Task = ({ task }) => {
  return (
    <div className="task border border-primary p-1">
      <div className="task__header d-flex justify-content-between mb-1d25">
        <p className="task__priority btn btn-primary rounded-pill px-2">priority</p>
        <p className="task__state btn btn-secondary rounded-pill">state</p>
      </div>
      <div className="task__title fw-bold mb-1">title</div>
      <div className="task__description mb-2">
        <h2 className="fw-400">Description:</h2>
        <div className="description__content lh-base">descriptionContent Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias necessitatibus rem officiis deleniti obcaecati.</div>
      </div>
      <div className="task__footer d-flex gap-1">
        <p className=" btn btn-secondary rounded-pill">start</p>
        <p className=" btn btn-secondary rounded-pill">deadLine</p>
        <img className="task__editImage" src={editImage} alt="edit" />
        <img src={deleteImage} alt="delete" />
      </div>
    </div>
  );
};

export default Task;
