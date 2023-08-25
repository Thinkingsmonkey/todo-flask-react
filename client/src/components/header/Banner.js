import { Link } from "react-router-dom";
import moreImage from "../../images/more.png";
const Banner = () => {
  return (
    <banner className="pb-3 d-block text-center mt-2">
      <h1 className="fs-1 mb-1d5">Todo</h1>
      <div className="add-group">
        <input className="add-group__input" type="text" placeholder="Add yout task" />
        <Link>
          <img className="add-group__more" src={moreImage} alt="more config" />
        </Link>
        <Link className="add-group__addBtn">
          <p className="text-text">Add Task</p>
        </Link>
      </div>
    </banner>
  );
};

export default Banner;
