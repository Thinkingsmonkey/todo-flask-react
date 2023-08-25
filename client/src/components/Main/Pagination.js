import leftImage from "../../images/left.png";
import rightImage from "../../images/right.png";

const Pagination = () => {
  return (
    <ul className="d-flex gap-1 align-items-center ">
      <li>
        <a href="">
          <img src={leftImage} alt="pagination-left" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={rightImage} alt="pagination-right" />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
