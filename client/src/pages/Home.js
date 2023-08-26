// Home.js
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/Main/Main";
import { useNavigate } from "react-router-dom";
import Edit from "../components/Edit";
// import useLoginState from "../hook/useLoginState";

function Home() {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [taskInfo, setTaskinfo] = useState({
    title: "",
    priority: "Medium",
    state: "",
    start: "",
    deadline: "",
    descript: "",
    method: "", // edit or add task
  });
  const handleEdit = (newTaskInfo) => {
    setTaskinfo((preTaskInfo) => ({ ...preTaskInfo, ...newTaskInfo }));
    setShowEdit(true);
  };

  //! 開發用記得刪除、重開
  // const url = "/api/test";
  // const [login, isPanding] = useLoginState(url);
  let login = true;
  let isPanding = false;

  useEffect(() => {
    if (login === false) {
      navigate("/login");
    }
  }, [login, navigate]);

  return (
    <div>
      {isPanding ? (
        <h2>Panding...</h2>
      ) : (
        login && (
          <>
            <Header handleEdit={handleEdit} />
            <Main handleEdit={handleEdit} />
            {showEdit && <Edit taskInfo={taskInfo} setShowEdit={setShowEdit}/>}
          </>
        )
      )}
    </div>
  );
}

export default Home;
